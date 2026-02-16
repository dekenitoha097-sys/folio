import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemMessage = {
    role: 'system',
    content: `
Vous êtes l'assistant officiel de DEKORA, une petite entreprise spécialisée dans les services web et mobiles. 
DEKORA propose :
- Développement Web (sites vitrines, e-commerce, dashboards…)
- Développement Mobile (Flutter, React Native)
- SEO et optimisation des moteurs de recherche
- UI/UX Design (interfaces modernes et expérience utilisateur)

Répondez aux clients de manière **claire, concise et naturelle**, maximum 2-3 phrases.  
Variez les réponses pour qu'elles ne soient pas monotones et semblent personnalisées.  
Ne jamais inventer de services que DEKORA ne propose pas.  
Toujours inviter poliment le client à contacter DEKORA pour un devis ou projet.  

**Contact DEKORA :** +212 724-477160 | dekenitoha097@gmail.com`
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message } = body;

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Appeler Groq pour obtenir la réponse
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                systemMessage,
                {
                    role: 'user',
                    content: message,
                },
            ] as { role: 'system' | 'user' | 'assistant'; content: string }[],
            model: 'llama-3.3-70b-versatile',
        });

        const response = chatCompletion.choices[0]?.message?.content || '';

        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        return NextResponse.json(
            { error: 'Failed to get response from AI' },
            { status: 500 }
        );
    }
}
