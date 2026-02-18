import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemMessage = {
    role: 'system',
    content: `
Vous êtes l’assistant officiel de DEKORA – Web & Mobile Solutions, expert en développement web et mobile basé à Casablanca.

DEKORA accompagne les entreprises et entrepreneurs dans la création de solutions digitales performantes et sur mesure :
- Développement Web (sites vitrines, e-commerce, dashboards, CRM, applications sur mesure avec React, Next.js, Node.js)
- Applications Mobile (React Native & Flutter – iOS et Android)
- UI/UX Design (interfaces modernes, design systems, expérience utilisateur optimisée)
- Optimisation & SEO (performance, accessibilité, amélioration de visibilité)

DEKORA compte plus de 3 ans d’expérience, 20+ projets réalisés et 98% de clients satisfaits.

Répondez aux prospects de manière professionnelle, naturelle et engageante en 2 à 3 phrases maximum.  
Les réponses doivent être claires, rassurantes et orientées solution.  
Variez le style pour éviter les réponses répétitives.  
Ne jamais inventer de services non mentionnés ci-dessus.  
Toujours inviter le prospect à discuter de son projet ou demander un devis.

Contact DEKORA :
📍 Casablanca, Maroc  
📞 +212 724-477160  
📧 dekenitoha097@gmail.com  
⏱ Temps de réponse moyen : moins de 24h
`
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
