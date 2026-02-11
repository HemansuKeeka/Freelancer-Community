import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DeepDive from './components/DeepDive';
import Integrations from './components/Integrations';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import CommunityMembers from './components/CommunityMembers';

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [currentView, setCurrentView] = useState<'home' | 'members'>('home');

  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);
  
  const handleSignupSuccess = (email: string) => {
    setIsMember(true);
    setUserEmail(email);
  };

  const handleCloseModal = () => {
    setIsSignupOpen(false);
    if (isMember) {
      setCurrentView('members');
      window.scrollTo(0, 0);
    }
  };

  const handleNavigate = (view: 'home' | 'members') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white overflow-x-hidden selection:bg-brand-teal selection:text-black font-sans">
      <Header 
        onSignup={toggleSignup} 
        onNavigate={handleNavigate} 
        currentView={currentView}
        isMember={isMember}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onSignup={toggleSignup} />
            <Features />
            <DeepDive />
            <Integrations />
            <GettingStarted />
          </>
        ) : (
          <CommunityMembers userEmail={userEmail} />
        )}
      </main>
      
      <Footer onSignup={toggleSignup} />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={handleCloseModal}
        onSuccess={handleSignupSuccess}
      />
    </div>
  );
}

export default App;