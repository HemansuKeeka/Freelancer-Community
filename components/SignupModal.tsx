import React, { useState } from 'react';
import { X, CheckCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient.ts';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    freelanceTopic: '',
    bio: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: dbError } = await supabase
        .from('members')
        .insert([{
          name: formData.name,
          email: formData.email,
          background: formData.background,
          freelance_topic: formData.freelanceTopic,
          bio: formData.bio
        }]);

      if (dbError) throw dbError;

      setStep('success');
      onSuccess(formData.email);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'An error occurred during signup.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-lg glass-card rounded-3xl overflow-hidden border border-gray-700 bg-[#0B0D0F] shadow-2xl transition-all">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="p-8 md:p-10 text-left">
          {step === 'form' ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-white">Join the Community</h2>
                <p className="text-gray-400">Apply to join our freelance collective and subscribe to our curated newsletter.</p>
              </div>

              {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded-xl text-sm">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Professional Background</label>
                  <select 
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors appearance-none"
                    value={formData.background}
                    onChange={e => setFormData({...formData, background: e.target.value})}
                  >
                    <option value="" disabled>Select your background</option>
                    <option value="design">Design / Creative</option>
                    <option value="dev">Engineering / Tech</option>
                    <option value="marketing">Marketing / Growth</option>
                    <option value="writing">Writing / Content</option>
                    <option value="other">Other Professional</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">What do you freelance about?</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. 3D Web Design, Python Automation..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                    value={formData.freelanceTopic}
                    onChange={e => setFormData({...formData, freelanceTopic: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">A little bit about yourself</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Tell us your story..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors resize-none"
                    value={formData.bio}
                    onChange={e => setFormData({...formData, bio: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-teal text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-green transition-all mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  Join Newsletter & Community
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">You're on the list!</h2>
              <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                Thanks for applying, {formData.name.split(' ')[0]}. You now have full access to our community member directory.
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-brand-teal text-black font-bold rounded-full hover:bg-brand-green transition-colors"
              >
                Go to Community
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;