import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; delay: string }> = ({ title, description, icon, delay }) => (
    <div className="bg-[#1a0d4a] p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-blue-900/50 animate-fade-in-up" style={{ animationDelay: delay }}>
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const AboutProgram: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-[#130343]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">O que você vai Encontrar</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Uma jornada completa de desenvolvimento para conectar você aos seus objetivos, com o apoio de grandes líderes.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Mentoria Estratégica"
                        description="Conexões valiosas com profissionais experientes da KPMG para orientação de carreira e aprendizados práticos."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        delay="0.2s"
                    />
                    <FeatureCard
                        title="Desenvolvimento Acelerado"
                        description="Acesso a uma trilha de conteúdos exclusivos, completa em materiais para aprimorar suas habilidades pessoais e profissionais."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        delay="0.4s"
                    />
                    <FeatureCard
                        title="Impacto Social"
                        description="Faça parte de uma comunidade engajada e contribua para um ecossistema de crescimento mútuo e com propósito."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                        delay="0.6s"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutProgram;