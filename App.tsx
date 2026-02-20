import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeVideo from './components/WelcomeVideo';
import HeroSection from './components/HeroSection';
import AboutProgram from './components/AboutProgram';
import ImpactNumbers from './components/ImpactNumbers';
import TrailTopics from './components/TrailTopics';
import ContentTrack from './components/ContentTrack';
import VideoTestimonials from './components/VideoTestimonials';
import TextTestimonials from './components/TextTestimonials';
import ImpactReports from './components/ImpactReports';
import Footer from './components/Footer';
import TrailModal from './components/TrailModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#0f003b] text-white min-h-screen overflow-x-hidden">
      <Header onAccessTrailClick={handleOpenModal} />
      <main>
        <HeroSection onAccessTrailClick={handleOpenModal} />
        <WelcomeVideo />
        <AboutProgram />
        <ImpactNumbers />
        <TrailTopics />
        <ContentTrack onAccessTrailClick={handleOpenModal} />
        <VideoTestimonials />
        <TextTestimonials />
        <ImpactReports />
      </main>
      <Footer onAccessTrailClick={handleOpenModal} />
      <TrailModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;