'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';

type Props = {
    scrollToSection: (sectionId: string) => void
}

const testimonials = [
    {
        id: 1,
        name: "Marie Dubois",
        role: "CEO, TechStart Morocco",
        content: "Un développeur exceptionnel qui a transformé ma vision en réalité. Le site e-commerce livré dépasse mes attentes en termes de design et de performance.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
        id: 2,
        name: "Ahmed Benali",
        role: "Directeur Technique, InnovCorp",
        content: "Collaboration excellente sur mon dashboard analytics. Communication fluide, respect des délais et code de qualité professionnelle. Je recommande fortement.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        id: 3,
        name: "Sophie Martin",
        role: "Fondatrice, BeautyCare",
        content: "Ma application mobile a généré une augmentation de 40% de mes commandes. Support réactif et professionnel tout au long du projet.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
        id: 4,
        name: "Youssef El Amrani",
        role: " CTO, FinanceApp",
        content: "Excellente expertise technique en React Native et Node.js. Le développement de mon application financière a été réalisé dans les temps.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#84cc16]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#84cc16]/10 group"
        >
            {/* Quote Icon */}
            <div className="mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#84cc16] to-[#22c55e] rounded-lg flex items-center justify-center">
                    <Quote className="w-5 h-5 text-black" />
                </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#84cc16] text-[#84cc16]" />
                ))}
            </div>

            {/* Content */}
            <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#84cc16] to-[#22c55e] flex items-center justify-center border-2 border-[#84cc16]/30 group-hover:border-[#84cc16] transition-colors">
                                            <User className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
        </motion.div>
    );
};

const Testimonials = ({ scrollToSection }: Props) => {
    return (
        <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Floating Orbs */}
            <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-l from-[#84cc16]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-[#22c55e]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#84cc16] font-medium tracking-wider uppercase text-sm">
                        Témoignages
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Ce que disent mes <span className="text-[#84cc16]">clients</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Des retours d'expérience authentiques de partenaires qui me font confiance pour leurs projets digitaux.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 gap-8 max-w-2xl mx-auto"
                >
                    {[
                        { number: "20+", label: "Projets réalisés" },
                        { number: "98%", label: "Clients satisfaits" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-[#84cc16] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
