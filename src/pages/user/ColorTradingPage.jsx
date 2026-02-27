import React, { useState, useEffect } from 'react';
import { Timer, Wallet, History, HelpCircle, Trophy, TrendingUp } from 'lucide-react';
import { Navebar } from '../../component/Navebar';

export const ColorTradingPage = () => {
  const [timeLeft, setTimeLeft] = useState(30); // 30 Seconds Timer
  const [activePeriod, setActivePeriod] = useState(20240510201);
  const [selectedBet, setSelectedBet] = useState(null); // 'Green', 'Red', 'Violet', or Number

  // --- COLORS & STYLES ---
  const goldText = "text-[#D4AF37]";
  const cardBg = "bg-[#0a192f]";
  const goldBorder = "border-[#D4AF37]";
  
  // Buttons Colors
  const btnGreen = "bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-[0_0_15px_rgba(16,185,129,0.4)]";
  const btnViolet = "bg-gradient-to-r from-violet-500 to-violet-700 shadow-[0_0_15px_rgba(139,92,246,0.4)]";
  const btnRed = "bg-gradient-to-r from-rose-500 to-rose-700 shadow-[0_0_15px_rgba(244,63,94,0.4)]";

  // --- DUMMY HISTORY DATA ---
  const history = [
    { period: '20240510200', price: '45212', number: 5, color: 'green-violet' },
    { period: '20240510199', price: '45208', number: 8, color: 'red' },
    { period: '20240510198', price: '45199', number: 1, color: 'green' },
    { period: '20240510197', price: '45180', number: 0, color: 'red-violet' },
    { period: '20240510196', price: '45176', number: 6, color: 'red' },
  ];

  // --- TIMER LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper for Result Dot Color
  const getResultDot = (type) => {
    if (type === 'green') return <div className="w-4 h-4 rounded-full bg-emerald-500"></div>;
    if (type === 'red') return <div className="w-4 h-4 rounded-full bg-rose-500"></div>;
    if (type === 'green-violet') return (
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        <div className="w-3 h-3 rounded-full bg-violet-500"></div>
      </div>
    );
    if (type === 'red-violet') return (
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
        <div className="w-3 h-3 rounded-full bg-violet-500"></div>
      </div>
    );
  };

  return (
    <>

      <div className="min-h-screen bg-[#051126] text-white p-4 pb-24 pt-28 animate-fade-in">
        
        {/* --- HEADER: WALLET --- */}
        <div className="flex justify-between items-center bg-[#0a192f] p-4 rounded-lg border border-[#1E3A8A] mb-6 shadow-lg">
          <div>
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Available Balance</p>
             <h2 className="text-3xl font-bold flex items-center gap-2">
               ₹ 24,500.00 <Wallet size={20} className={goldText} />
             </h2>
          </div>
          <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-sm font-bold text-sm hover:brightness-110">
            Recharge
          </button>
        </div>

        {/* --- PERIOD & TIMER SECTION --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          
          {/* Left: Period ID */}
          <div className="flex-1 bg-[#0a192f] p-4 rounded-lg border border-[#1E3A8A] flex flex-col justify-center items-center relative overflow-hidden">
             <Trophy className="absolute top-2 right-2 text-[#D4AF37]/20 w-24 h-24" />
             <p className="text-gray-400 text-sm flex items-center gap-2"><Trophy size={14} className={goldText}/> Period</p>
             <h3 className="text-4xl font-mono font-bold mt-2 tracking-widest text-white">{activePeriod}</h3>
          </div>

          {/* Right: Countdown */}
          <div className="flex-1 bg-[#0a192f] p-4 rounded-lg border border-[#1E3A8A] flex flex-col justify-center items-center">
             <p className="text-gray-400 text-sm flex items-center gap-2"><Timer size={14} className={goldText}/> Count Down</p>
             
             <div className="flex gap-2 mt-2">
                {/* Visual Boxes for Time */}
                <div className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] w-12 h-14 rounded flex items-center justify-center text-3xl font-bold">0</div>
                <div className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] w-12 h-14 rounded flex items-center justify-center text-3xl font-bold">0</div>
                <span className="text-2xl font-bold text-gray-500 self-center">:</span>
                <div className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] w-12 h-14 rounded flex items-center justify-center text-3xl font-bold">
                  {Math.floor(timeLeft / 10)}
                </div>
                <div className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] w-12 h-14 rounded flex items-center justify-center text-3xl font-bold animate-pulse">
                  {timeLeft % 10}
                </div>
             </div>
          </div>
        </div>

        {/* --- BETTING CONTROLS --- */}
        <div className="bg-[#0a192f] rounded-lg border border-[#D4AF37]/30 p-6 mb-8 relative">
          
          {/* Color Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
             <button 
               onClick={() => setSelectedBet('Green')}
               className={`${btnGreen} py-4 rounded-md text-white font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform`}
             >
               Join Green
             </button>
             <button 
               onClick={() => setSelectedBet('Violet')}
               className={`${btnViolet} py-4 rounded-md text-white font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform`}
             >
               Join Violet
             </button>
             <button 
               onClick={() => setSelectedBet('Red')}
               className={`${btnRed} py-4 rounded-md text-white font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform`}
             >
               Join Red
             </button>
          </div>

          {/* Number Grid */}
          <div className="grid grid-cols-5 gap-3 md:gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedBet(num)}
                className={`
                  aspect-square rounded-full border-2 text-xl font-bold transition-all hover:scale-110 shadow-lg
                  ${num === 0 || num === 5 
                     ? 'border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white' 
                     : num % 2 === 0 
                        ? 'border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white' // Even = Red
                        : 'border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white' // Odd = Green
                  }
                  ${selectedBet === num ? 'bg-white text-black scale-110 border-white' : 'bg-[#051126]'}
                `}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Selected Bet Indicator */}
          {selectedBet !== null && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-gray-400 text-sm">You selected:</p>
              <span className="text-2xl font-bold text-[#D4AF37] uppercase">{selectedBet}</span>
              <button className="block w-full mt-3 bg-[#D4AF37] text-black font-bold py-3 rounded hover:brightness-110">
                CONFIRM BET
              </button>
            </div>
          )}
        </div>

        {/* --- GAME HISTORY (PARITY RECORD) --- */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-l-4 border-[#D4AF37] pl-3">
             <h2 className="text-xl font-bold flex items-center gap-2">
               <History size={20} className={goldText} /> Parity Record
             </h2>
             <button className="text-xs text-[#D4AF37] flex items-center gap-1">
               <HelpCircle size={14} /> Read Rule
             </button>
          </div>

          <div className="bg-[#0a192f] rounded-lg border border-[#1E3A8A] overflow-hidden">
            <table className="w-full text-center">
              <thead className="bg-[#051126] text-[#D4AF37] text-xs uppercase tracking-wider border-b border-[#1E3A8A]">
                <tr>
                  <th className="py-3">Period</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Number</th>
                  <th className="py-3">Result</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {history.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#1E3A8A]/30 hover:bg-[#D4AF37]/5 transition-colors">
                    <td className="py-3 font-mono text-gray-300">{item.period}</td>
                    <td className="py-3 font-mono text-gray-400">{item.price}</td>
                    <td className={`py-3 font-bold text-lg ${
                      item.number === 0 || item.number === 5 ? 'text-violet-400' :
                      item.number % 2 === 0 ? 'text-rose-400' : 'text-emerald-400'
                    }`}>
                      {item.number}
                    </td>
                    <td className="py-3 flex justify-center items-center">
                      {getResultDot(item.color)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};