'use client';
import {

    Mail,
    Phone,
    MapPin,
    Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type DataForm = {
    name: string,
    email: string,
    message: string

}

type Props = {
    formData: DataForm,
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>,
    formStatus: string,
    loading: boolean
}

const Contacts = ({ formData, handleInputChange, handleSubmit, formStatus, loading }: Props) => {

    return (
        <>
            {/* Section Contact */}
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
                {/* Grille neon subtile */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Accessoires neon dynamiques - Spirales et ondes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Spirale neon 1 */}
                    <svg className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="50" fill="none" stroke="#84cc16" strokeWidth="0.5" opacity="0.5" />
                        <circle cx="100" cy="100" r="75" fill="none" stroke="#84cc16" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="100" cy="100" r="100" fill="none" stroke="#84cc16" strokeWidth="0.5" opacity="0.2" />
                        <circle cx="100" cy="100" r="125" fill="none" stroke="#84cc16" strokeWidth="0.5" opacity="0.1" />
                    </svg>

                    {/* Spirale neon 2 */}
                    <svg className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-15" viewBox="0 0 200 200">
                        <path d="M 100,100 L 150,100 A 50,50 0 0,1 100,150 A 100,100 0 0,1 100,0 A 150,150 0 0,0 100,200" 
                              fill="none" stroke="#84cc16" strokeWidth="0.5" />
                    </svg>

                    {/* Ondes neon */}
                    <div className="absolute top-1/3 left-10 w-96 h-32">
                        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(132, 204, 22, 0)" />
                                    <stop offset="50%" stopColor="rgba(132, 204, 22, 0.4)" />
                                    <stop offset="100%" stopColor="rgba(132, 204, 22, 0)" />
                                </linearGradient>
                            </defs>
                            <path d="M0,50 Q100,20 200,50 T400,50" fill="none" stroke="url(#waveGradient)" strokeWidth="2" opacity="0.6" />
                            <path d="M0,50 Q100,80 200,50 T400,50" fill="none" stroke="url(#waveGradient)" strokeWidth="2" opacity="0.3" />
                        </svg>
                    </div>

                    {/* Points neon flottants */}
                    <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#84cc16] rounded-full animate-pulse" style={{
                        animation: 'float 4s ease-in-out infinite'
                    }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#84cc16] rounded-full animate-pulse" style={{
                        animation: 'float 5s ease-in-out infinite 1s'
                    }}></div>
                    <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-[#84cc16] rounded-full animate-pulse" style={{
                        animation: 'float 6s ease-in-out infinite 2s'
                    }}></div>

                    {/* Orbes flottantes */}
                    <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
                        animation: 'float 12s ease-in-out infinite'
                    }}></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-[#84cc16]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
                        animation: 'float 10s ease-in-out infinite 2s'
                    }}></div>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(50px); }
                    }
                `}</style>

                <div className="container mx-auto max-w-6xl relative z-10">
                    {/* En-tête magique */}
                    <div className="text-center mb-20 animate-fade-in">
                        <div className="inline-flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"></div>
                            <span className="text-sm font-bold text-[#84cc16] uppercase tracking-[0.3em]">05</span>
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"></div>
                        </div>

                        <h2 className="text-6xl sm:text-7xl font-bold mb-6 relative inline-block">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16]">
                                Créons ensemble
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transformez votre vision en réalité. Chaque conversation est le début d'une aventure extraordinaire.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                        {/* Colonne gauche - Infos magiques */}
                        <div className="lg:col-span-2 space-y-6 animate-fade-in-up animation-delay-200">

                            {/* Carte Email avec effet glassmorphism neon */}
                            <a
                                href="mailto:dekenitoha097@gmail.com"
                                className="group block"
                            >
                                <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] hover:shadow-2xl hover:shadow-[#84cc16]/20 transition-all duration-500 overflow-hidden">
                                    {/* Effet de brillance au survol */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                            <Mail className="h-6 w-6 text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-[#84cc16]/70 uppercase tracking-wider mb-1">Email</div>
                                            <div className="font-bold text-white text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                dekenitoha097@gmail.com
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-[#84cc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Carte Téléphone */}
                            <a
                                href="tel:+212724477160"
                                className="group block"
                            >
                                <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] hover:shadow-2xl hover:shadow-[#84cc16]/20 transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#84cc16]/50">
                                            <Phone className="h-6 w-6 text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-[#84cc16]/70 uppercase tracking-wider mb-1">Téléphone</div>
                                            <div className="font-bold text-white text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                +212 724-477160
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-[#84cc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Carte WhatsApp */}
                            <a
                                href="https://wa.me/212724477160"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl hover:border-[#84cc16] hover:shadow-2xl hover:shadow-[#84cc16]/20 transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="relative flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#25D366]/50">
                                            <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-[#84cc16]/70 uppercase tracking-wider mb-1">WhatsApp</div>
                                            <div className="font-bold text-white text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                +212 724-477160
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-[#84cc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Carte Localisation */}
                            <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center shadow-lg shadow-[#84cc16]/50">
                                        <MapPin className="h-6 w-6 text-black" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-[#84cc16]/70 uppercase tracking-wider mb-1">Localisation</div>
                                        <div className="font-bold text-white text-sm">
                                            Casablanca, Maroc
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card avec animation de pulsation neon */}
                            <div className="relative p-6 bg-gradient-to-br from-[#84cc16]/10 to-black border-2 border-[#84cc16]/30 rounded-3xl overflow-hidden group hover:border-[#84cc16] transition-all duration-500">
                                {/* Cercle animé en arrière-plan */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#84cc16]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 bg-[#84cc16] rounded-full animate-pulse shadow-lg shadow-[#84cc16]/50"></div>
                                        <span className="text-white font-bold text-sm uppercase tracking-wider">Disponible maintenant</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Temps de réponse moyen : <strong className="text-[#84cc16]">moins de 24h</strong>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Colonne droite - Formulaire magique */}
                        <div className="lg:col-span-3 animate-fade-in-up animation-delay-400">
                            <div className="relative">
                                {/* Effet de halo derrière le formulaire */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#84cc16]/20 via-transparent to-[#84cc16]/20 rounded-3xl blur-2xl opacity-30"></div>

                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#84cc16]/30 rounded-3xl p-10 hover:border-[#84cc16] hover:shadow-2xl hover:shadow-[#84cc16]/20 transition-all duration-500">
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                                            <span>Envoyez un message</span>
                                            <Sparkles className="w-6 h-6 text-[#84cc16]" />
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Racontez-nous votre projet. Plus vous êtes précis, plus nous pourrons vous aider efficacement.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Nom et Email en grille */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-xs font-bold text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                                                    <span>Nom complet</span>
                                                    <span className="text-red-400">*</span>
                                                </Label>
                                                <div className="relative group">
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Jean Dupont"
                                                        className="border-2 border-[#84cc16]/30 focus:border-[#84cc16] rounded-2xl h-14 pl-12 bg-white/5 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500 group-hover:border-[#84cc16]/50"
                                                    />
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#84cc16]/50">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-xs font-bold text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                                                    <span>Email</span>
                                                    <span className="text-red-400">*</span>
                                                </Label>
                                                <div className="relative group">
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="jean.dupont@example.com"
                                                        className="border-2 border-[#84cc16]/30 focus:border-[#84cc16] rounded-2xl h-14 pl-12 bg-white/5 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500 group-hover:border-[#84cc16]/50"
                                                    />
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#84cc16]/50">
                                                        <Mail className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-xs font-bold text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                                                <span>Votre message</span>
                                                <span className="text-red-400">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Bonjour ! J'aimerais discuter d'un projet...&#10;&#10;Décrivez votre projet, vos objectifs, votre timeline..."
                                                    rows={8}
                                                    className="border-2 h-36 border-[#84cc16]/30 focus:border-[#84cc16] rounded-2xl resize-none bg-white/5 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500 hover:border-[#84cc16]/50 pt-4"
                                                />
                                                <div className="flex justify-between items-center mt-2 px-2">
                                                    <span className="text-xs text-gray-400">Minimum 20 caractères</span>
                                                    <span className={`text-xs font-medium ${formData.message.length >= 20 ? 'text-[#84cc16]' : 'text-gray-400'}`}>
                                                        {formData.message.length} / 20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bouton magique */}
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={formData.message.length < 20 || loading}
                                            className="w-full bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16] hover:shadow-lg hover:shadow-[#84cc16]/60 text-black py-7 text-lg font-bold rounded-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                <span>{loading ? "Envoi en cours..." : "Envoyer le message"}</span>
                                                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </span>
                                        </Button>

                                        {formStatus === 'success' && (
                                            <div className="p-6 bg-gradient-to-r from-[#84cc16]/20 to-[#65a30d]/10 border-2 border-[#84cc16]/50 rounded-2xl animate-fade-in relative overflow-hidden">
                                                {/* Confettis animés */}
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#84cc16] rounded-full animate-confetti"></div>
                                                    <div className="absolute top-0 left-3/4 w-2 h-2 bg-[#a3e635] rounded-full animate-confetti animation-delay-200"></div>
                                                </div>

                                                <div className="relative flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-xl flex items-center justify-center flex-shrink-0 animate-bounce-once shadow-lg shadow-[#84cc16]/50">
                                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#84cc16] mb-1 flex items-center gap-2">
                                                            Message envoyé avec succès !
                                                            <span className="text-xl">🎉</span>
                                                        </h4>
                                                        <p className="text-sm text-gray-300">Nous vous répondrons très bientôt.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {formStatus === 'error' && (
                                            <div className="p-6 bg-gradient-to-r from-red-500/20 to-red-600/10 border-2 border-red-500/50 rounded-2xl animate-fade-in relative overflow-hidden">
                                                <div className="relative flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/50">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-red-400 mb-1 flex items-center gap-2">
                                                            Erreur lors de l'envoi
                                                            <span className="text-xl">⚠️</span>
                                                        </h4>
                                                        <p className="text-sm text-gray-300">Veuillez réessayer ou nous contacter directement par email.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Note magique */}
                                        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                            <svg className="w-4 h-4 text-[#84cc16]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <span>Vos données sont sécurisées et confidentielles</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacts;