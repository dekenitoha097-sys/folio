'use client';

import {
    Mail,
    Phone,
    MapPin,
   
    Github,
} from 'lucide-react';

type Props = {
    scrollToSection: (sectionId: string) => void;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Footer = ({ scrollToSection, setIsMenuOpen }:Props) => {
    
    return ( 
        <>
         {/* Footer */}
            <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#84cc16]/20">
                {/* Grille neon subtile */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, rgba(132, 204, 22, .1) 25%, rgba(132, 204, 22, .1) 26%, transparent 27%, transparent 74%, rgba(132, 204, 22, .1) 75%, rgba(132, 204, 22, .1) 76%, transparent 77%, transparent)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Lignes neon diagonales */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#84cc16]/20 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-[#84cc16]/10 to-transparent rotate-45 opacity-50"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-[#84cc16]/10 to-transparent -rotate-45 opacity-30"></div>
                </div>

                {/* Orbes flottantes subtiles */}
                <div className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-r from-[#84cc16]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
                    animation: 'float 15s ease-in-out infinite'
                }}></div>
                <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-l from-[#84cc16]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{
                    animation: 'float 12s ease-in-out infinite 2s'
                }}></div>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(30px); }
                    }
                `}</style>

                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Colonne 1 - Branding */}
                        <div className="space-y-4">
                            <div className="flex-shrink-0 leading-tight">
                                <span className="block text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#84cc16] via-[#a3e635] to-[#84cc16] bg-clip-text text-transparent">
                                    DEKORA
                                </span>
                                <span className="block text-sm font-medium text-[#84cc16]/70">
                                    Web & Mobile Solutions
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Expert en développement web et mobile, créant des solutions digitales innovantes et performantes.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/tohaDEKENI/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gradient-to-br from-[#84cc16]/20 to-[#84cc16]/10 hover:bg-gradient-to-br hover:from-[#84cc16]/40 hover:to-[#84cc16]/20 border border-[#84cc16]/30 hover:border-[#84cc16] rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#84cc16]/30"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5 text-[#84cc16]" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/toha-dekeni-9b0599356/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gradient-to-br from-[#84cc16]/20 to-[#84cc16]/10 hover:bg-gradient-to-br hover:from-[#84cc16]/40 hover:to-[#84cc16]/20 border border-[#84cc16]/30 hover:border-[#84cc16] rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#84cc16]/30"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="h-5 w-5 text-[#84cc16]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Colonne 2 - Navigation */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#84cc16]">Navigation</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => scrollToSection('accueil')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('a-propos')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        À propos
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('realisations')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        Réalisations
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('testimonials')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        Témoignages
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Colonne 3 - Services */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#84cc16]">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-[#84cc16] transition-colors duration-200 cursor-pointer font-medium">Développement Web</li>
                                <li className="hover:text-[#84cc16] transition-colors duration-200 cursor-pointer font-medium">Applications Mobile</li>
                                <li className="hover:text-[#84cc16] transition-colors duration-200 cursor-pointer font-medium">UI/UX Design</li>
                                <li className="hover:text-[#84cc16] transition-colors duration-200 cursor-pointer font-medium">Optimisation & SEO</li>
                                <li className="hover:text-[#84cc16] transition-colors duration-200 cursor-pointer font-medium">Consultation</li>
                            </ul>
                        </div>

                        {/* Colonne 4 - Contact */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#84cc16]">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 group">
                                    <Mail className="h-5 w-5 text-[#84cc16]/70 group-hover:text-[#84cc16] mt-0.5 flex-shrink-0 transition-colors duration-200" />
                                    <a
                                        href="mailto:dekenitoha097@gmail.com"
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm break-all font-medium"
                                    >
                                        dekenitoha097@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <Phone className="h-5 w-5 text-[#84cc16]/70 group-hover:text-[#84cc16] mt-0.5 flex-shrink-0 transition-colors duration-200" />
                                    <a
                                        href="tel:+212724477160"
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        +212 724-477160
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <svg className="h-5 w-5 text-[#84cc16]/70 group-hover:text-[#84cc16] mt-0.5 flex-shrink-0 transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <a
                                        href="https://wa.me/212724477160"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 text-sm font-medium"
                                    >
                                        WhatsApp
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-[#84cc16]/70 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400 text-sm font-medium">
                                        Casablanca, Maroc
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Séparateur neon */}
                    <div className="border-t border-[#84cc16]/20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} <span className="font-semibold text-[#84cc16]">DEKORA</span> — Web & Mobile Solutions.
                                Tous droits réservés.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 font-medium">
                                    Mentions légales
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 font-medium">
                                    Politique de confidentialité
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#84cc16] transition-colors duration-200 font-medium">
                                    Conditions d&apos;utilisation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;