import React from 'react';

interface ContentTrackProps {
    onAccessTrailClick: () => void;
}

const ContentTrack: React.FC<ContentTrackProps> = ({ onAccessTrailClick }) => {
    return (
        <section id="cta" className="py-16 md:py-24 bg-[#130343]">
            <div className="container mx-auto px-6 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">Trilha de Conteúdos da Mentoria</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Acesse uma biblioteca exclusiva de materiais didáticos, workshops e recursos para aprimorar suas habilidades em liderança, inovação, carreira e soft skills, desenvolvidos por especialistas da KPMG.
                    </p>
                </div>
                <div className="mt-10 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <button onClick={onAccessTrailClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-500/30">
                        Acessar Trilha
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContentTrack;