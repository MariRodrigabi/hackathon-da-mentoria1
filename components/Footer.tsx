import React from 'react';
import logo from "/assets/kpmgwhite.png";

interface FooterProps {
    onAccessTrailClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAccessTrailClick }) => {
    return (
        <footer className="bg-[#0a0028]">
            <div className="container mx-auto px-6 pt-16 pb-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4">Pronto para dar o próximo passo na sua carreira?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Junte-se a uma comunidade de talentos e líderes que estão moldando o futuro.</p>
                    <div className="flex justify-center">
                         <button onClick={onAccessTrailClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-500/30">
                            Acessar Trilha
                        </button>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="flex items-center mb-6 md:mb-0">
                        <img src={logo} alt="KPMG Logo" className="h-8 w-auto mr-3" />
                    </div>
                    <p className="text-white text-sm">
                        &copy; {new Date().getFullYear()} KPMG & Instituto Joule. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;