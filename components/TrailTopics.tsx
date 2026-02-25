import React from 'react';

const topics = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        title: "Habilidades",
        description: "Desenvolvimento de competências técnicas e comportamentais essenciais para o mercado de trabalho atual.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" />
            </svg>
        ),
        title: "Networking",
        description: "Construção e fortalecimento da sua marca no CV e LinkedIn e conexões estratégicas.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v- உண்மையில்" />
            </svg>
        ),
        title: "Carreira",
        description: "Defina seus objetivos, identifique oportunidades e trace um plano claro para o seu crescimento profissional.",
    },
];

const TrailTopics: React.FC = () => {
    return (
        <section id="trail-topics" className="py-16 md:py-24 bg-[#130343]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">Uma jornada de aprendizagem estruturada</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Nossa trilha foi desenhada para cobrir os pilares fundamentais do seu desenvolvimento profissional.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-800/50" style={{ transform: 'translateY(-50%)' }}></div>
                    
                    <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
                        {topics.map((topic, index) => (
                            <div key={index} className="flex flex-col items-center text-center max-w-xs animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                                <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 text-white mb-6 border-4 border-[#130343]">
                                    {topic.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{topic.title}</h3>
                                <p className="text-gray-400">{topic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrailTopics;
