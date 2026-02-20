import React, { useState } from 'react';

const LOGO_URL = 'https://i.postimg.cc/50nPY9QJ/2024-KPMG-Hackathon-da-Mentoria-1080-x-1080-px.png';

interface HeaderProps {
    onAccessTrailClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAccessTrailClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'O Programa', href: '#about' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Relatórios', href: '#reports' },
    ];

    return (
        <header className="bg-[#0f003b]/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={LOGO_URL} alt="Hackathon da Mentoria Logo" className="h-10 w-auto" />
                </div>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button onClick={onAccessTrailClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
                        Acessar Trilha
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#1a0d4a] px-6 pb-4">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-center py-2" onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <button onClick={() => { onAccessTrailClick(); setIsMenuOpen(false); }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 text-center mt-4">
                            Acessar Trilha
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
