import React, { useState } from 'react';

interface TrailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENTOR_URL = 'https://academy.institutojoule.org/cursos/mentora-kpmg-talentos';
const MENTEE_URL = 'https://academy.institutojoule.org/cursos/mentorada-kpmg-talentos/';

const TrailModal: React.FC<TrailModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<'mentor' | 'mentee' | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleAccessTrail = () => {
    const url = selectedRole === 'mentor' ? MENTOR_URL : MENTEE_URL;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose(); 
    setSelectedRole(null);
  };
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
      setSelectedRole(null);
    }
  };

  const handleCloseButton = () => {
    onClose();
    setSelectedRole(null);
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-[#1a0d4a] text-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 border border-blue-900/50 transform transition-transform duration-300 scale-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Qual é o seu perfil?</h2>
          <button onClick={handleCloseButton} className="text-gray-400 hover:text-white transition-colors" aria-label="Fechar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-300 mb-8">Selecione o seu perfil para acessar a trilha de conteúdos correta.</p>
        
        <div className="flex flex-col gap-4 mb-8">
          <button 
            onClick={() => setSelectedRole('mentee')}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${selectedRole === 'mentee' ? 'bg-blue-600 border-blue-500' : 'bg-[#2a1d5a] border-blue-900/50 hover:bg-blue-900/70'}`}
          >
            <span className="font-bold text-lg">Sou Mentorada / Mentorado</span>
            <span className="block text-sm text-gray-300">Quero acelerar minha carreira com a ajuda de um líder.</span>
          </button>
          <button 
            onClick={() => setSelectedRole('mentor')}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${selectedRole === 'mentor' ? 'bg-blue-600 border-blue-500' : 'bg-[#2a1d5a] border-blue-900/50 hover:bg-blue-900/70'}`}
          >
            <span className="font-bold text-lg">Sou Mentor / Mentora</span>
            <span className="block text-sm text-gray-300">Quero compartilhar minha experiência e impactar talentos.</span>
          </button>
        </div>

        {selectedRole && (
          <button
            onClick={handleAccessTrail}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Acessar a sua Trilha
          </button>
        )}
      </div>
    </div>
  );
};

export default TrailModal;
