import React from 'react';
import { ArrowRight, Play, MessageSquare, Users, BarChart3 } from 'lucide-react';

interface HeroProps {
  onSignup: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignup }) => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#1a2e35] via-[#0B0D0F] to-[#0B0D0F] -z-10"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-teal/10 rounded-full blur-[100px] -z-10"></div>

      {/* Floating Elements (Decorative) */}
      <div className="hidden lg:block absolute top-40 left-[15%] animate-float">
        <div className="glass-card p-3 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=1" alt="User" />
            </div>
            <div className="text-xs">
                <p className="font-bold">Anna joined</p>
                <p className="text-gray-400">2 mins ago</p>
            </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-60 right-[15%] animate-float" style={{ animationDelay: '2s' }}>
         <div className="glass-card p-3 rounded-full flex items-center gap-3 pr-6">
            <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-black font-bold">
                <MessageSquare size={18} />
            </div>
             <div className="text-xs">
                <p className="font-bold">New discussion</p>
                <p className="text-brand-teal">Strategy 2024</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 cursor-pointer hover:bg-white/5 transition-colors" onClick={onSignup}>
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Apply: Join the exclusive collective</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          The collaborative <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-brand-teal to-brand-green gradient-text text-transparent">freelancer platform</span> <br className="hidden md:block" />
          built for real teamwork.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Foundry brings the world's best independent talent together. Join our curated newsletter and community to find your next squad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            onClick={onSignup}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Join the community
          </button>
           <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2 border border-gray-700">
            <Play size={18} fill="currentColor" /> Watch demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-brand-teal/20 blur-[60px] -z-10 rounded-full"></div>
            <div className="bg-[#14171C] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-[16/9] flex">
                {/* Sidebar */}
                <div className="w-64 bg-[#0e1013] border-r border-gray-800 hidden md:flex flex-col p-4 gap-4">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-blue-500"></div>
                        <span className="font-bold">Foundry.</span>
                    </div>
                    <div className="space-y-1">
                        <div className="p-2 rounded-lg bg-gray-800 text-white text-sm font-medium">🚀 Community Feed</div>
                        <div className="p-2 rounded-lg text-gray-500 text-sm hover:bg-gray-800/50 cursor-pointer">📢 Announcements</div>
                        <div className="p-2 rounded-lg text-gray-500 text-sm hover:bg-gray-800/50 cursor-pointer">💬 General Chat</div>
                        <div className="p-2 rounded-lg text-gray-500 text-sm hover:bg-gray-800/50 cursor-pointer">💡 Ideas</div>
                    </div>
                    <div className="mt-auto">
                        <div className="p-3 rounded-xl bg-gray-800/50 border border-gray-700">
                            <p className="text-xs text-gray-400 mb-2">Network Growth</p>
                            <div className="w-full bg-gray-700 h-1.5 rounded-full mb-1">
                                <div className="bg-brand-teal w-[75%] h-1.5 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500">
                                <span>1,240 Members</span>
                                <span>Target: 2k</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
                        <h3 className="font-semibold text-white">General Chat</h3>
                        <div className="flex -space-x-2">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#14171C] overflow-hidden">
                                    <img src={`https://picsum.photos/50/50?random=${i}`} alt="Member" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-[#14171C] bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300">+42</div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                         {/* Fake Messages */}
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src="https://picsum.photos/50/50?random=10" alt="" />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-bold text-sm">Alex Design</span>
                                    <span className="text-xs text-gray-500">10:23 AM</span>
                                </div>
                                <p className="text-gray-300 text-sm mt-1 bg-gray-800/50 p-3 rounded-r-xl rounded-bl-xl inline-block">
                                    Has anyone tried the new Figma plugins for 3D assets? They look insane! 🔥
                                </p>
                            </div>
                         </div>

                         <div className="flex gap-4 flex-row-reverse">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src="https://picsum.photos/50/50?random=11" alt="" />
                            </div>
                            <div className="text-right">
                                <div className="flex items-baseline gap-2 justify-end">
                                    <span className="text-xs text-gray-500">10:25 AM</span>
                                    <span className="font-bold text-sm">Sarah Dev</span>
                                </div>
                                <p className="text-white text-sm mt-1 bg-brand-teal/20 border border-brand-teal/30 p-3 rounded-l-xl rounded-br-xl inline-block text-left">
                                    Yes! I used one for the landing page hero section. Saved me about 4 hours of blender work.
                                </p>
                            </div>
                         </div>
                    </div>
                    
                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-800">
                        <div className="bg-gray-800/50 rounded-lg h-12 flex items-center px-4 text-gray-500 text-sm">
                            Message #general...
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;