import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import DeepDive from './components/DeepDive.tsx';
import Integrations from './components/Integrations.tsx';
import GettingStarted from './components/GettingStarted.tsx';
import Footer from './components/Footer.tsx';
import SignupModal from './components/SignupModal.tsx';
import CommunityMembers from './components/CommunityMembers.tsx';
import SubscriptionModal from './components/SubscriptionModal.tsx';

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [currentView, setCurrentView] = useState<'home' | 'members'>('home');

  // Check for persistent membership on load/refresh
  useEffect(() => {
    const joined = localStorage.getItem('foundry_joined');
    const email = localStorage.getItem('foundry_email');
    
    if (joined === 'true') {
      setIsMember(true);
      setUserEmail(email || undefined);
      // Trigger the subscription pop-up on refresh if they are already a member
      setIsSubscriptionOpen(true);
    }
  }, []);

  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);
  
  const handleSignupSuccess = (email: string) => {
    setIsMember(true);
    setUserEmail(email);
    localStorage.setItem('foundry_joined', 'true');
    localStorage.setItem('foundry_email', email);
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

      <SubscriptionModal 
        isOpen={isSubscriptionOpen}
        onClose={() => setIsSubscriptionOpen(false)}
      />
    </div>
  );
}

export default App;