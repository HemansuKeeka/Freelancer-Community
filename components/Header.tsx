import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onSignup: () => void;
  onNavigate: (view: 'home' | 'members') => void;
  currentView: 'home' | 'members';
  isMember: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSignup, onNavigate, currentView, isMember }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0D0F]/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <button 
                  onClick={() => onNavigate('home')}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-blue-500"></div>
                     <span className="text-white font-bold text-xl tracking-tight">Foundry</span>
                     <span className="text-xs text-gray-500 ml-1">by hexagonAI</span>
                </button>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <button onClick={() => onNavigate('home')} className={`${currentView === 'home' ? 'text-brand-teal' : 'hover:text-white'} transition-colors`}>Platform</button>
                    <a href="#" className="hover:text-white transition-colors">Metaverse</a>
                    
                    {isMember && (
                      <button 
                        onClick={() => onNavigate('members')}
                        className={`${currentView === 'members' ? 'text-brand-teal font-bold' : 'hover:text-white'} flex items-center gap-2 transition-all relative`}
                      >
                        Community Members
                        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse"></span>
                      </button>
                    )}
                    
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Community</a>
                    <a href="#" className="hover:text-white transition-colors">For Startups</a>
                </nav>

                <div className="flex items-center gap-4">
                    {!isMember && (
                      <button 
                        onClick={onSignup}
                        className="text-sm font-medium text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
                      >
                        Sign up
                      </button>
                    )}
                    <button 
                      onClick={isMember ? () => onNavigate('members') : onSignup}
                      className={`px-5 py-2.5 rounded-full border border-gray-600 text-sm font-medium transition-all ${isMember ? 'bg-brand-teal border-brand-teal text-black font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)]' : 'text-white hover:bg-white hover:text-black'}`}
                    >
                        {isMember ? 'Explore Members' : 'Join Collective'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;