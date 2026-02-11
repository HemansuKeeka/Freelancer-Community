import React, { useState, useEffect } from 'react';
import { MessageSquare, Search, Globe, Star, Loader2, Send } from 'lucide-react';
import { Member } from '../types';
import { supabase } from '../supabaseClient';

interface CommunityMembersProps {
  userEmail?: string;
}

const CommunityMembers: React.FC<CommunityMembersProps> = ({ userEmail }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  const [messageContent, setMessageContent] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching members:', error);
      } else if (data) {
        const mapped: Member[] = data.map(m => ({
          id: m.id,
          name: m.name,
          role: m.freelance_topic,
          background: m.background,
          bio: m.bio,
          avatar: m.avatar_url,
          isOnline: m.is_online
        }));
        setMembers(mapped);
      }
      setLoading(false);
    };

    fetchMembers();
  }, []);

  const handleSendMessage = async (recipientId: string, memberName: string) => {
    if (!messageContent.trim()) return;
    setSendingMessage(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{
          recipient_id: recipientId,
          content: messageContent,
          sender_email: userEmail || 'anonymous'
        }]);

      if (error) throw error;

      alert(`Message successfully sent to ${memberName}!`);
      setMessageContent('');
      setActiveMessageId(null);
    } catch (err) {
      console.error('Messaging error:', err);
      alert('Failed to send message. Please try again.');
    } finally {
      setSendingMessage(false);
    }
  };

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.background.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0B0D0F]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Collective</h1>
            <p className="text-gray-400 max-w-xl">Meet the elite freelancers currently building in our community. Connect, collaborate, and scale together.</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search members or skills..." 
              className="w-full bg-[#14171C] border border-gray-800 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-brand-teal transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="animate-spin text-brand-teal" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredMembers.map((member) => (
              <div key={member.id} className="glass-card group p-6 rounded-3xl border border-gray-800 hover:border-brand-teal/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <Star size={14} className="text-brand-teal" fill="#2DD4BF" />
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-800 p-0.5">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                    {member.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#0B0D0F] rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors truncate">{member.name}</h3>
                    <p className="text-xs font-semibold text-brand-teal/80 uppercase tracking-wider truncate">{member.role}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{member.background}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-10 overflow-hidden line-clamp-2">
                  {member.bio}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Globe size={14} />
                    <span>Open to work</span>
                  </div>
                  <button 
                    onClick={() => setActiveMessageId(member.id)}
                    className="flex items-center gap-2 text-sm font-bold text-white bg-gray-800/50 hover:bg-brand-teal hover:text-black px-4 py-2 rounded-full transition-all"
                  >
                    <MessageSquare size={16} />
                    Message
                  </button>
                </div>

                {/* Messaging Overlay */}
                {activeMessageId === member.id && (
                  <div className="absolute inset-0 bg-[#0B0D0F]/95 backdrop-blur-md p-6 flex flex-col z-10 animate-in fade-in zoom-in duration-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold">Message {member.name.split(' ')[0]}</h4>
                      <button onClick={() => { setActiveMessageId(null); setMessageContent(''); }} className="text-gray-500 hover:text-white">Close</button>
                    </div>
                    <textarea 
                      className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-teal mb-4 resize-none text-white"
                      placeholder="Type your collaboration request..."
                      value={messageContent}
                      onChange={(e) => setMessageContent(e.target.value)}
                    ></textarea>
                    <button 
                      disabled={sendingMessage || !messageContent.trim()}
                      onClick={() => handleSendMessage(member.id, member.name)}
                      className="w-full bg-brand-teal text-black font-bold py-3 rounded-xl hover:bg-brand-green transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {sendingMessage ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                      Send Invitation
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {!loading && filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic text-lg">No members found matching your search...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityMembers;