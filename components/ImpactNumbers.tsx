import React from 'react';
import { impactNumbers } from '../constants';

const ImpactNumbers: React.FC = () => {
    return (
        <section className="bg-[#0f003b]">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="bg-[#1a0d4a] rounded-2xl shadow-xl border border-blue-900/50 p-10 animate-fade-in-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {impactNumbers.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <p className="text-4xl lg:text-5xl font-extrabold text-blue-400">{item.value}</p>
                                <p className="text-sm lg:text-base text-gray-300 mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactNumbers;