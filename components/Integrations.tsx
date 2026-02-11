import React from 'react';
import { Github, Slack, Figma, Twitter, Youtube, Twitch, Chrome, Trello } from 'lucide-react';

const Integrations = () => {
    // Coordinates for circle layout
    const icons = [
        { Icon: Github, color: "text-white", bg: "bg-gray-800" },
        { Icon: Slack, color: "text-purple-400", bg: "bg-[#2d1b2e]" },
        { Icon: Figma, color: "text-orange-400", bg: "bg-[#2d231b]" },
        { Icon: Twitter, color: "text-blue-400", bg: "bg-[#1b252d]" },
        { Icon: Youtube, color: "text-red-400", bg: "bg-[#2d1b1b]" },
        { Icon: Twitch, color: "text-purple-500", bg: "bg-[#281b2d]" },
        { Icon: Chrome, color: "text-yellow-400", bg: "bg-[#2d2a1b]" },
        { Icon: Trello, color: "text-blue-500", bg: "bg-[#1b222d]" },
    ];

  return (
    <section className="py-32 bg-[#0B0D0F] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">MANAGE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Easy integrations with <span className="text-brand-teal">your <br/>existing tools</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-20">Find and embed plugins and widgets. Get free and premium images, videos, and other assets for your site.</p>

        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] mx-auto">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(45,212,191,0.3)]">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-blue-500"></div>
                    </div>
                </div>
            </div>
            
            {/* Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-gray-800/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-gray-800/30 rounded-full"></div>

            {/* Orbiting Icons */}
            {icons.map((item, index) => {
                const angle = (index / icons.length) * 2 * Math.PI;
                const radius = 200; // Radius for desktop, scale down with CSS transform for mobile if needed
                // Simple positioning calc for static layout, could use CSS animation for rotation
                const left = 50 + 35 * Math.cos(angle); // %
                const top = 50 + 35 * Math.sin(angle); // %
                
                return (
                    <div 
                        key={index}
                        className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-full ${item.bg} border border-gray-700 flex items-center justify-center z-10 hover:scale-110 transition-transform cursor-pointer`}
                        style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <item.Icon className={`${item.color}`} size={24} />
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;