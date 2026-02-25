import React from 'react';
import { testimonials } from '../constants';

const TextTestimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-[#130343]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-white">Feedbacks de Mentores e Mentorados</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        Inspire-se com as histórias de quem faz o Hackathon da Mentoria acontecer.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#1a0d4a] p-8 rounded-2xl border border-blue-900/50 flex flex-col h-full" 
                                style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                            <p className="text-gray-300 flex-grow relative">
                                <span className="absolute -top-4 -left-4 text-7xl text-blue-600/30 font-serif">“</span>
                                {testimonial.quote}
                            </p>
                                                        <div className="mt-8 text-center">
                                <p className="font-semibold text-white text-lg">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-blue-300 mt-1">
                                    {testimonial.role}
                                </p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TextTestimonials;