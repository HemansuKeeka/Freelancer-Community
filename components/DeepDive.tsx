import React from 'react';
import { Plus, Check, Video, Lock, CreditCard } from 'lucide-react';

const FeatureCard = ({ title, active = false }: { title: string; active?: boolean }) => (
    <div className={`p-6 rounded-xl border transition-all cursor-pointer ${active ? 'bg-[#1a1d21] border-brand-teal/50' : 'bg-transparent border-gray-800 hover:border-gray-700'}`}>
        <div className="flex items-center justify-between mb-2">
            <h4 className={`font-medium ${active ? 'text-white' : 'text-gray-400'}`}>{title}</h4>
            {active ? <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div> : <Plus size={16} className="text-gray-600" />}
        </div>
        {active && <p className="text-sm text-gray-400">Get access to the designer network and learn UI/UX and No Code.</p>}
    </div>
);

const DeepDive = () => {
  return (
    <div className="bg-[#0B0D0F] pb-32">
        <div className="container mx-auto px-4">
            
            {/* Section 1: Organized */}
            <div className="mb-40">
                <div className="text-center mb-16">
                     <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">CREATE</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Organized, easy to navigate — <br/><span className="text-brand-teal">and fun for your members</span></h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: UI Mockup */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="bg-[#14171C] p-4 rounded-xl border border-gray-800 shadow-xl">
                                    <div className="h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mb-4"></div>
                                    <div className="w-10 h-10 bg-white rounded-lg -mt-9 ml-2 border-4 border-[#14171C] flex items-center justify-center text-black font-bold text-xs">Df</div>
                                    <h5 className="mt-2 font-bold">DesignFoundry</h5>
                                    <button className="w-full mt-4 py-2 text-xs border border-gray-700 rounded text-gray-400">Join The Community</button>
                                </div>
                                 <div className="bg-[#14171C] p-4 rounded-xl border border-gray-800 shadow-xl opacity-50">
                                    <div className="h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4"></div>
                                    <div className="w-10 h-10 bg-white rounded-lg -mt-9 ml-2 border-4 border-[#14171C] flex items-center justify-center text-black font-bold text-xs">Fs</div>
                                    <h5 className="mt-2 font-bold">Foundry Stacks</h5>
                                    <button className="w-full mt-4 py-2 text-xs border border-gray-700 rounded text-gray-400">Join The Community</button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#14171C] p-4 rounded-xl border border-gray-800 shadow-xl opacity-50">
                                    <div className="h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4"></div>
                                    <div className="w-10 h-10 bg-white rounded-lg -mt-9 ml-2 border-4 border-[#14171C] flex items-center justify-center text-black font-bold text-xs">Fs</div>
                                    <h5 className="mt-2 font-bold">Foundry Stacks</h5>
                                    <button className="w-full mt-4 py-2 text-xs border border-gray-700 rounded text-gray-400">Join The Community</button>
                                </div>
                                <div className="bg-[#14171C] p-4 rounded-xl border border-gray-800 shadow-xl">
                                    <div className="h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mb-4"></div>
                                    <div className="w-10 h-10 bg-white rounded-lg -mt-9 ml-2 border-4 border-[#14171C] flex items-center justify-center text-black font-bold text-xs">Df</div>
                                    <h5 className="mt-2 font-bold">DesignFoundry</h5>
                                    <button className="w-full mt-4 py-2 text-xs border border-gray-700 rounded text-gray-400">Join The Community</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4">
                        <FeatureCard title="Design your community areas with spaces" />
                        <FeatureCard title="Create private & secret spaces for groups" active={true} />
                        <FeatureCard title="Manage permissions effectively" />
                        <FeatureCard title="Organized content feeds" />
                    </div>
                </div>
            </div>

            {/* Section 2: Live Streams */}
            <div className="mb-40">
                <div className="text-center mb-16">
                     <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">LIVE STREAMS</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Interactive live streams. Personalized & <br/><span className="text-brand-teal">Creative Communities are here.</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     {/* Left: Video/Profile Mockup */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                         <div className="relative w-full max-w-md bg-[#14171C] border border-gray-800 rounded-3xl p-6 shadow-2xl">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold">Settings</h3>
                                <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center"><Check size={16} className="text-black" /></div>
                            </div>
                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-teal p-1">
                                    <img src="https://picsum.photos/100/100?random=20" className="w-full h-full rounded-full object-cover" alt="Profile" />
                                </div>
                                <div>
                                    <div className="text-xs text-brand-teal font-bold mb-1">LIVE NOW</div>
                                    <h4 className="font-bold">Adam Zampa</h4>
                                    <p className="text-xs text-gray-500">adc@123.com</p>
                                </div>
                            </div>
                            {/* Menu */}
                             <div className="space-y-2">
                                <div className="p-3 bg-gray-800/50 rounded-lg flex items-center justify-between text-sm">
                                    <span>Personal Info</span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                 <div className="p-3 bg-gray-800/50 rounded-lg flex items-center justify-between text-sm">
                                    <span>Themes</span>
                                </div>
                                <div className="p-4 border border-gray-700 rounded-xl mt-4">
                                    <p className="text-xs text-gray-500 mb-2">CHOOSE THEME COLOR</p>
                                    <div className="flex gap-2">
                                        {[1,2,3,4,5].map(i => (
                                            <div key={i} className={`w-6 h-6 rounded-full cursor-pointer ${i===2 ? 'bg-brand-teal ring-2 ring-offset-2 ring-offset-black ring-brand-teal' : 'bg-gray-600'}`}></div>
                                        ))}
                                    </div>
                                </div>
                             </div>
                             
                             {/* Floating Video Icon */}
                             <div className="absolute -right-10 top-1/2 w-20 h-20 bg-black border border-gray-800 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                                 <Video size={32} className="text-white" />
                             </div>
                         </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4 order-1 lg:order-2">
                         <FeatureCard title="Immersive live streams with co-hosts" active={true} />
                        <FeatureCard title="Direct messages and group chats" />
                        <FeatureCard title="Searchable member directory & rich profiles" />
                        <FeatureCard title="Event spaces with calendars & RSVPs" />
                    </div>
                </div>
            </div>

            {/* Section 3: Monetize */}
            <div>
                 <div className="text-center mb-16">
                     <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">MONETIZE</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Monetize your community with <br/><span className="text-brand-teal">flexible payments</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Payment Mockup */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-green-500/10 blur-[50px] rounded-full"></div>
                         <div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-800">
                             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Background" className="w-full h-full object-cover opacity-40" />
                             
                             {/* Card Overlay */}
                             <div className="absolute inset-0 flex items-center justify-center p-8">
                                 <div className="bg-[#14171C]/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700 w-full max-w-xs shadow-2xl">
                                     <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center mb-4 mx-auto">
                                         <Check size={24} className="text-black" />
                                     </div>
                                     <h4 className="text-center font-bold mb-1">Get Access to this post</h4>
                                     <p className="text-center text-xs text-gray-400 mb-6">with a one-time fee</p>
                                     
                                     <div className="space-y-3">
                                         <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                                             <div className="text-[10px] text-gray-500">Card number</div>
                                             <div className="flex justify-between items-center">
                                                 <span className="text-sm font-mono text-gray-300">•••• •••• •••• 4242</span>
                                                 <CreditCard size={14} className="text-gray-500"/>
                                             </div>
                                         </div>
                                         <div className="flex gap-3">
                                              <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex-1">
                                                 <div className="text-[10px] text-gray-500">MM/YY</div>
                                                 <div className="text-sm font-mono text-gray-300">12/25</div>
                                              </div>
                                               <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex-1">
                                                 <div className="text-[10px] text-gray-500">CVC</div>
                                                 <div className="text-sm font-mono text-gray-300">***</div>
                                              </div>
                                         </div>
                                         <button className="w-full bg-brand-teal text-black font-bold py-3 rounded-lg hover:bg-brand-green transition-colors">
                                             Pay $49.00
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4">
                        <FeatureCard title="Flexible subscriptions, one-time payments & more" />
                        <FeatureCard title="Easily gate access and offer multiple tiers" active={true} />
                        <FeatureCard title="Offer free trials, coupons and upsells" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default DeepDive;