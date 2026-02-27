import React, { useState } from 'react';
import { Gift, ShieldCheck, Copy } from 'lucide-react';
import { Navebar } from '../../component/Navebar'; // Navbar Import

export const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  // --- STYLES ---
  const goldBtnClass = "w-full py-3 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  // --- DATA ---
  const promotions = [
    {
      id: 1,
      category: 'Sports',
      title: '100% Sports Welcome Bonus',
      desc: 'Get up to ₹10,000 on your first deposit. Bet on Cricket, Football & Tennis.',
      code: 'ROYAL100',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      category: 'Casino',
      title: 'Live Casino Cashback',
      desc: 'Get 5% Weekly Cashback on your net losses in Roulette & Baccarat.',
      code: 'CASINO5',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'Slots',
      title: '50 Free Spins Daily',
      desc: 'Play "Gold Rush" slot and get 50 Free Spins every Monday.',
      code: 'SPIN50',
      image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      category: 'Sports',
      title: 'IPL Accumulator Boost',
      desc: 'Get 20% extra winnings on all IPL accumulators with 4+ selections.',
      code: 'IPL2024',
      image: 'https://images.unsplash.com/photo-1531415074984-61e663d3f94f?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      category: 'Casino',
      title: 'VIP High Roller Bonus',
      desc: 'Deposit ₹50,000+ and get an exclusive ₹25,000 instant bonus.',
      code: 'VIPKING',
      image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      category: 'Slots',
      title: 'Jackpot Hunt',
      desc: 'Participate in the Mega Moolah tournament and win from ₹1 Crore pool.',
      code: 'JACKPOT',
      image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredPromos = activeTab === 'All' 
    ? promotions 
    : promotions.filter(promo => promo.category === activeTab);

  return (
    <>
      {/* 1. Navbar Added */}
      <Navebar />

      {/* 2. Main Container with Padding Fixes */}
      {/* pt-28: Taake Navbar ke peeche content na chul jaye */}
      {/* pb-20: Taake neeche wala content na kate scroll karne par */}
      <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 pt-28 pb-20 animate-fade-in">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
            Royal <span className={goldText}>Promotions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Boost your winnings with our exclusive bonuses, cashback offers, and daily rewards tailored just for Kings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0a192f] p-1 rounded-sm border border-[#1E3A8A]">
            {['All', 'Sports', 'Casino', 'Slots'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab 
                    ? 'bg-[#D4AF37] text-black shadow-lg scale-105' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPromos.map((promo) => (
            <div key={promo.id} className={`${cardBg} border ${subBorder} rounded-lg overflow-hidden group hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col`}>
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent z-10"></div>
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-3 right-3 z-20 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {promo.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {promo.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {promo.desc}
                </p>

                {/* Code Box */}
                <div className="bg-[#051126] border border-dashed border-gray-600 rounded p-3 mb-4 flex justify-between items-center group-hover:border-[#D4AF37]/50 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase">Promo Code</span>
                    <span className="text-[#D4AF37] font-mono font-bold tracking-widest">{promo.code}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white hover:scale-110 transition-transform" title="Copy Code">
                    <Copy size={18} />
                  </button>
                </div>

                <button className={goldBtnClass}>
                  Claim Bonus
                </button>

                <div className="text-center mt-3">
                   <a href="#" className="text-xs text-gray-500 hover:text-[#D4AF37] underline">Terms & Conditions Apply</a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Safe & Secure Banner */}
        <div className="mt-20 max-w-7xl mx-auto bg-gradient-to-r from-[#8E6E1E] via-[#D4AF37] to-[#8E6E1E] rounded-lg p-0.5">
          <div className="bg-[#051126] rounded-md p-8 text-center flex flex-col items-center">
              <ShieldCheck size={48} className="text-[#D4AF37] mb-4" />
              <h2 className="text-2xl font-bold mb-2">Safe & Secure Gaming</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-6">
                Our bonuses are transparent with no hidden terms. Enjoy fair play and instant withdrawals on your winnings.
              </p>
              <button className="text-[#D4AF37] font-bold border-b border-[#D4AF37] hover:text-white hover:border-white transition pb-1">
                Read Bonus Policy
              </button>
          </div>
        </div>

      </div>
    </>
  );
};