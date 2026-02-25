import React from 'react';
import { impactReports } from '../constants';

const ImpactReports: React.FC = () => {
    return (
        <section id="reports" className="py-16 md:py-24 bg-[#0f003b]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">Relatórios de Impacto das Turmas Anteriores</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Explore os dados e resultados que comprovam a transformação gerada pelo nosso programa.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impactReports.map((report, index) => (
                        <div key={index} className="bg-[#1a0d4a] p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-blue-900/50 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">{report.title}</h3>
                                <p className="text-gray-400 mb-6">{report.description}</p>
                            </div>
                            <a href="#" className="inline-block bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300">
                                Baixar Relatório Completo
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactReports;