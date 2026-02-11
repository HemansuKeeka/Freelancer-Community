import React from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onSignup: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSignup }) => {
  return (
    <footer className="relative bg-[#0B0D0F] pt-20 overflow-hidden">
        {/* Curved Footer CTA Section */}
        <div className="relative z-10 mb-[-1px]">
            <svg viewBox="0 0 1440 320" className="w-full block" preserveAspectRatio="none">
                 <path fill="#2DD4BF" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center top-20 md:top-40 px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Want to be part of the future?</h2>
                <button 
                  onClick={onSignup}
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors mb-2"
                >
                    Join the Collective & Newsletter
                </button>
                <p className="text-black/60 text-sm mt-4">Connect with elite freelancers worldwide.</p>
            </div>
        </div>

        {/* Footer Links (Background matched to SVG fill) */}
        <div className="bg-brand-teal text-black pt-20 pb-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-black"></div>
                            <span className="font-bold text-xl">HEXIGONai</span>
                        </div>
                        <p className="text-sm opacity-70 mb-6">Building the community layer for elite freelancers.</p>
                        <div className="flex gap-4">
                            <Twitter size={20} className="opacity-70 hover:opacity-100 cursor-pointer"/>
                            <Instagram size={20} className="opacity-70 hover:opacity-100 cursor-pointer"/>
                            <Linkedin size={20} className="opacity-70 hover:opacity-100 cursor-pointer"/>
                            <Github size={20} className="opacity-70 hover:opacity-100 cursor-pointer"/>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
                        <div>
                            <h4 className="font-bold mb-4">Product Tours</h4>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><a href="#" className="hover:underline">Design Foundry</a></li>
                                <li><a href="#" className="hover:underline">Foundry Stacks</a></li>
                                <li><a href="#" className="hover:underline">Foundry Chat</a></li>
                                <li><a href="#" className="hover:underline">Sendero</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold mb-4">Integrate & Build</h4>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><a href="#" className="hover:underline">Sendero Pricing</a></li>
                                <li><a href="#" className="hover:underline">Integrations</a></li>
                                <li><a href="#" className="hover:underline">Enterprise Teams</a></li>
                                <li><a href="#" className="hover:underline">Download</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold mb-4">Learn</h4>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><a href="#" className="hover:underline">Courses</a></li>
                                <li><a href="#" className="hover:underline">Bootcamps</a></li>
                                <li><a href="#" className="hover:underline">Magazine</a></li>
                                <li><a href="#" className="hover:underline">Tools</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold mb-4">Collective</h4>
                            <ul className="space-y-2 text-sm opacity-70">
                                <li><button onClick={onSignup} className="hover:underline">Join Us</button></li>
                                <li><a href="#" className="hover:underline">Member Directory</a></li>
                                <li><a href="#" className="hover:underline">Perks</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-black/10 mt-12 pt-8 flex flex-col md:flex-row justify-between text-xs opacity-60">
                    <p>© Hexigon AI. Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Privacy</a>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Designed by BrandWeld</a>
                        <a href="#">Changelog</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;