import React from 'react';

const WelcomeVideo: React.FC = () => {
    const videoId = 'InZ35tG-Uss';
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}&t=11s`;

    return (
        <section className="py-16 md:py-24 bg-[#0f003b]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">Boas-vindas ao programa de mentoria</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Assista ao vídeo abaixo para entender um pouco sobre a importância do programa e o que você pode esperar dessa jornada de desenvolvimento. 
                    </p>
                </div>
                <div className="aspect-video max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-black border-4 border-blue-900/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                   <a href={videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Assistir vídeo de boas-vindas no YouTube" className="w-full h-full relative group cursor-pointer block">
                        <img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} alt="Capa do vídeo de boas-vindas" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-blue-600/80 group-hover:bg-blue-600 group-hover:scale-110 text-white rounded-full h-20 w-20 md:h-24 md:w-24 flex items-center justify-center transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WelcomeVideo;