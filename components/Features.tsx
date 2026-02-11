import React, { useState } from 'react';
import { Layers, MessageCircle, DollarSign, Share2 } from 'lucide-react';

const Features = () => {
    const [activeTab, setActiveTab] = useState('Create');

    const tabs = [
        { id: 'Create', label: 'Create' },
        { id: 'Engage', label: 'Engage' },
        { id: 'Monetize', label: 'Monetize' },
        { id: 'Embed', label: 'Embed' },
    ];

  return (
    <div className="bg-[#0B0D0F] py-20 relative overflow-hidden">
        {/* Curvy background divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0B0D0F]"></path>
            </svg>
        </div>

        <div className="container mx-auto px-4 mt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Create a thriving community<br /><span className="text-brand-teal">you can be proud of.</span></h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center border-b border-gray-800 mb-12 max-w-xl mx-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                            activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-teal"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Feature Highlight Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                <div className="relative">
                    {/* Decorative Image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                         <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Happy freelancer working" 
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent"></div>
                        
                        {/* Floating Badges */}
                        <div className="absolute bottom-10 left-10 glass-card p-4 rounded-full flex items-center gap-3 animate-float">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <Share2 className="text-white" size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Shareable</p>
                                <p className="text-xs text-gray-300">Across any device</p>
                            </div>
                        </div>

                         <div className="absolute top-10 right-10 glass-card p-4 rounded-full flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <Layers className="text-white" size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Embeddable</p>
                                <p className="text-xs text-gray-300">Use on your site</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Your people, discussions, and content — all in one place.
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Gone are the days of needing to make a whole bunch of different tools work together. With Foundry, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.
                    </p>
                    <ul className="space-y-4 pt-4">
                        {[
                            'Seamlessly integrate with your existing tech stack',
                            'Customizable spaces for different topics',
                            'Role-based permissions and moderation tools'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Grid of Use Cases */}
             <div className="mb-32">
                 <div className="text-center mb-12">
                     <h3 className="text-3xl font-bold">Thousands of communities & <span className="text-brand-green">use-cases just like yours.</span></h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                         { title: 'Built for No-code', desc: 'Start an engaged community for your product or website using Notion, Framer or Webflow.' },
                         { title: 'Course communities', desc: 'Help your students connect with each other, and improve student outcomes.' },
                         { title: 'Membership communities', desc: 'Offer flexibility to create a membership experience that’s truly yours.' },
                         { title: 'Startups & Customers', desc: 'Build deep relationships with your customers, help them connect with each other.' },
                         { title: 'Clubs & organizations', desc: 'Bring your people together to organize, share ideas, run events, and collaborate.' },
                         { title: 'Teams & Orgs', desc: 'Provide a dedicated home for your team and have everything in one place.' },
                     ].map((card, i) => (
                         <div key={i} className="bg-[#14171C] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group">
                             <h4 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors">{card.title}</h4>
                             <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
             
             {/* Features List Columns */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
                 <div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2"><Layers size={18} className="text-brand-teal"/> Create</h4>
                     <ul className="space-y-3 text-sm text-gray-500">
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Organized discussions</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Private spaces</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Rich posts</li>
                     </ul>
                 </div>
                 <div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2"><MessageCircle size={18} className="text-blue-500"/> Engage</h4>
                     <ul className="space-y-3 text-sm text-gray-500">
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Group chat rooms</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Live streams</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Events</li>
                     </ul>
                 </div>
                 <div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2"><DollarSign size={18} className="text-green-500"/> Monetize</h4>
                     <ul className="space-y-3 text-sm text-gray-500">
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Paid memberships</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Recurring subscriptions</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Gate access</li>
                     </ul>
                 </div>
                 <div>
                     <h4 className="text-white font-bold mb-6 flex items-center gap-2"><Share2 size={18} className="text-purple-500"/> Embed</h4>
                     <ul className="space-y-3 text-sm text-gray-500">
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Single sign-on (SSO)</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Advanced analytics</li>
                         <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Embed to website</li>
                     </ul>
                 </div>
             </div>
        </div>
    </div>
  );
};

export default Features;