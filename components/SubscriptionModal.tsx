import React from 'react';
import { X, Zap, Check, ShieldCheck } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    // Redirect to your specific Stripe Payment Link
    const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_4gMaEZ1P04P12Kscwf6wE00";
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-md glass-card rounded-3xl overflow-hidden border border-brand-teal/30 bg-[#0B0D0F] shadow-[0_0_50px_rgba(45,212,191,0.15)] animate-in zoom-in duration-300">
        {/* Banner */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-green p-1 h-1.5" />
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-teal">
            <Zap size={32} fill="currentColor" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Unlock Pro Benefits</h2>
          <p className="text-gray-400 text-sm mb-6">
            You're part of the collective. Now, get the tools to scale your freelance business to the next level.
          </p>

          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 mb-8 text-left">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold text-white font-mono">R100</span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
            
            <ul className="space-y-3">
              {[
                "Unlimited direct messages",
                "Featured profile in directory",
                "Access to exclusive job board",
                "Priority collaboration invites"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check size={14} className="text-brand-teal" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={handleRedirect}
            className="w-full bg-brand-teal text-black font-bold py-4 rounded-xl hover:bg-brand-green transition-all shadow-[0_4px_20px_rgba(45,212,191,0.3)] mb-4"
          >
            Upgrade to Pro
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <ShieldCheck size={12} />
            Secure Payment via Stripe
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;