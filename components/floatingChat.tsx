'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export default function FloatingChat() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            // Ajouter le message de l'utilisateur
            const userMessage: Message = {
                id: messages.length + 1,
                text: message,
                isUser: true,
                timestamp: new Date(),
            };
            setMessages([...messages, userMessage]);
            const currentMessage = message;
            setMessage('');

            // Activer le loading
            setIsLoading(true);

            try {
                // Attendre au minimum 3 secondes pour le suspense
                const [response] = await Promise.all([
                    fetch('/api/groq', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ message: currentMessage }),
                    }),
                    new Promise(resolve => setTimeout(resolve, 3000))
                ]);

                if (!response.ok) {
                    throw new Error('Failed to get response');
                }

                const data = await response.json();
                
                // Désactiver le loading
                setIsLoading(false);

                // Ajouter la réponse de l'assistant
                const botResponse: Message = {
                    id: messages.length + 2,
                    text: data.response,
                    isUser: false,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botResponse]);
            } catch (error) {
                console.error('Error:', error);
                
                setIsLoading(false);

                // Ajouter un message d'erreur
                const errorMessage: Message = {
                    id: messages.length + 2,
                    text: "Désolé, une erreur s'est produite. Veuillez réessayer.",
                    isUser: false,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, errorMessage]);
            }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {!isOpen ? (
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsOpen(true)}
                    className="group cursor-pointer relative flex items-center justify-center bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16] text-black border-2 border-[#84cc16] shadow-lg hover:shadow-2xl hover:shadow-[#84cc16]/60 transition-all duration-300 ease-out overflow-hidden"
                    style={{
                        width: isHovered ? '200px' : '64px',
                        height: '64px',
                        borderRadius: isHovered ? '32px' : '50%',
                    }}
                >
                    <div className="absolute left-4 flex items-center gap-3">
                        <MessageCircle className="w-6 h-6 flex-shrink-0" />
                        <span
                            className="whitespace-nowrap text-sm font-medium transition-opacity duration-300"
                            style={{
                                opacity: isHovered ? 1 : 0,
                            }}
                        >
                            Discutons ensemble
                        </span>
                    </div>
                </button>
            ) : (
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#84cc16]/30 rounded-2xl shadow-2xl w-80 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b-2 border-[#84cc16]/30 bg-gradient-to-r from-[#84cc16]/10 to-transparent">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-[#84cc16]" />
                            <h3 className="text-white font-semibold">Assistant Chat IA</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="h-96 p-4 overflow-y-auto bg-black/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex items-start gap-2 mb-4 ${msg.isUser ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                            >
                                {!msg.isUser && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#84cc16] to-[#65a30d] flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-4 h-4 text-black" />
                                    </div>
                                )}
                                <div
                                    className={`rounded-lg p-3 max-w-[75%] ${msg.isUser
                                        ? 'bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black rounded-tr-none'
                                        : 'bg-white/10 text-white border border-[#84cc16]/30 rounded-tl-none'
                                        }`}
                                >
                                    <p className="text-sm break-words">{msg.text}</p>

                                </div>
                                {msg.isUser && (
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-semibold text-white">U</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="flex items-start gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#84cc16] to-[#65a30d] flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-4 h-4 text-black" />
                                </div>
                                <div className="bg-white/10 text-white border border-[#84cc16]/30 rounded-lg rounded-tl-none p-3">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-[#84cc16] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-[#84cc16] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-[#84cc16] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />

                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="border-t border-[#84cc16]/30 p-4 bg-gradient-to-r from-[#84cc16]/10 to-transparent">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Écrivez votre message..."
                                disabled={isLoading}
                                className="flex-1 bg-white/5 text-white placeholder-gray-500 px-4 py-2 rounded-full border border-[#84cc16]/30 focus:outline-none focus:ring-2 focus:ring-[#84cc16]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <button
                                type="submit"
                                disabled={!message.trim() || isLoading}
                                className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black p-2 rounded-full hover:shadow-lg hover:shadow-[#84cc16]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
