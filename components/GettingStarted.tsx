import React from 'react';
import { HelpCircle, Plus, Zap } from 'lucide-react';

const GettingStarted = () => {
    return (
        <section className="bg-[#0B0D0F] py-20 relative">
             <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0F] to-[#14171C]"></div>
             <div className="container mx-auto px-4 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     
                     {/* Card 1 */}
                     <div className="bg-[#f5f5f5] rounded-full aspect-square flex flex-col items-center justify-center p-12 text-center group hover:-translate-y-2 transition-transform duration-300">
                         <h3 className="text-2xl font-bold text-black mb-4">How do I get started?</h3>
                         <p className="text-gray-600 text-sm leading-relaxed mb-6">
                             When you sign up, you're on the Free plan by default. The Free plan is designed for teams just starting out.
                         </p>
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                             <HelpCircle />
                         </div>
                     </div>

                     {/* Card 2 (Dark) */}
                     <div className="bg-[#08090a] border border-gray-800 rounded-full aspect-square flex flex-col items-center justify-center p-12 text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                         <div className="absolute inset-0 bg-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <h3 className="text-2xl font-bold text-brand-teal mb-4">Add Community Channels</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-6">
                             Channels bring order and clarity to work — you can create them for every project, topic, or team.
                         </p>
                          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg text-brand-teal">
                             <Plus />
                         </div>
                     </div>

                     {/* Card 3 */}
                      <div className="bg-[#f5f5f5] rounded-full aspect-square flex flex-col items-center justify-center p-12 text-center group hover:-translate-y-2 transition-transform duration-300">
                         <h3 className="text-2xl font-bold text-black mb-4">Seamless integrate & embed</h3>
                         <p className="text-gray-600 text-sm leading-relaxed mb-6">
                             Gather requests, send shout-outs or crowdsource new ideas and add plugins and integrations easily.
                         </p>
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                             <Zap />
                         </div>
                     </div>

                 </div>
             </div>
        </section>
    )
}

export default GettingStarted;