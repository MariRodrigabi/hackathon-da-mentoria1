import React from 'react';

interface HeroSectionProps {
    onAccessTrailClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAccessTrailClick }) => {
    return (
        <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f003b] via-[#0f003b]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32 relative z-10 flex items-center">
                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 animate-fade-in-down">
                        Hackathon da Mentoria: <span className="text-blue-400">Desvende seu Potencial</span> e Transforme sua Carreira
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Um Programa de Mentoria 100% online e gratuito, promovido por KPMG Brasil e Instituto Joule, para acelerar seu desenvolvimento pessoal e profissional através de orientação estratégica de líderes.
                    </p>
                    <div className="flex justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                         <button onClick={onAccessTrailClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-500/30">
                            Acessar Trilha
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}></p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;