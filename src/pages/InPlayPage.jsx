import React, { useState } from 'react';
import { Activity, Trophy, Gamepad2, MonitorPlay, Timer, ChevronRight, BarChart3, PlayCircle } from 'lucide-react';

export const InPlayPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold text-sm py-1.5 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)]";
  const layBtnClass = "bg-[#0a192f] border border-[#D4AF37]/50 text-[#D4AF37] font-bold text-sm py-1.5 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all";
  const cardBg = "bg-[#0a192f]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  const allMatches = [
    {
      id: 1,
      sport: 'Cricket',
      league: 'T20 World Cup',
      team1: 'India',
      team2: 'Australia',
      score: 'IND: 142/2 (14.4) | AUS: Yet to Bat',
      status: 'Live',
      odds: { home: '1.72', draw: '-', away: '2.10' }
    },
    {
      id: 2,
      sport: 'Football',
      league: 'Premier League',
      team1: 'Liverpool',
      team2: 'Chelsea',
      score: 'LIV 1 - 0 CHE (32:15)',
      status: '1st Half',
      odds: { home: '1.40', draw: '4.20', away: '7.50' }
    },
    {
      id: 3,
      sport: 'Tennis',
      league: 'Wimbledon Final',
      team1: 'N. Djokovic',
      team2: 'C. Alcaraz',
      score: 'Set 2: 6-4, 2-3',
      status: 'Set 2',
      odds: { home: '1.95', draw: '-', away: '1.85' }
    },
    {
      id: 4,
      sport: 'Cricket',
      league: 'Big Bash League',
      team1: 'Brisbane Heat',
      team2: 'Sydney Thunder',
      score: 'BRI: 110/6 (18.0) | SYD: 155/5 (20.0)',
      status: 'Innings Break',
      odds: { home: '12.0', draw: '-', away: '1.05' }
    },
    {
      id: 5,
      sport: 'Football',
      league: 'La Liga',
      team1: 'Real Madrid',
      team2: 'Sevilla',
      score: 'RMA 0 - 0 SEV (05:00)',
      status: '1st Half',
      odds: { home: '1.25', draw: '6.00', away: '10.0' }
    }
  ];

  const filteredMatches = activeTab === 'All' 
    ? allMatches 
    : allMatches.filter(match => match.sport === activeTab);

  const getSportIcon = (sport) => {
    switch(sport) {
      case 'Cricket': return <Trophy size={14} className="text-[#D4AF37]" />;
      case 'Football': return <Gamepad2 size={14} className="text-[#D4AF37]" />;
      case 'Tennis': return <MonitorPlay size={14} className="text-[#D4AF37]" />;
      default: return <Activity size={14} className="text-[#D4AF37]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Activity className="text-[#D4AF37] animate-pulse" /> In-Play Matches
          </h1>
          <p className="text-gray-400 text-sm mt-1">Live betting action across all major sports.</p>
        </div>
        
        <div className="flex gap-2 bg-[#0a192f] p-1 rounded-sm border border-[#1E3A8A]">
          {['All', 'Cricket', 'Football', 'Tennis'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-sm text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-[#D4AF37] text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Live Events', val: '24' },
          { label: 'Cricket', val: '5' },
          { label: 'Football', val: '12' },
          { label: 'Tennis', val: '7' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#0a192f] border border-[#1E3A8A] p-3 rounded-sm text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-[#D4AF37]">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {filteredMatches.map((match) => (
          <div key={match.id} className={`${cardBg} border ${subBorder} rounded-sm p-4 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all`}>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {getSportIcon(match.sport)}
                  <span>{match.league}</span>
                  <span className="flex items-center gap-1 text-red-500 ml-2 animate-pulse">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> {match.status}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between md:justify-start gap-4">
                    <span className="font-bold text-lg">{match.team1}</span>
                    <span className="text-[#D4AF37] font-bold">vs</span>
                    <span className="font-bold text-lg">{match.team2}</span>
                  </div>
                  <p className="text-gray-300 font-mono text-sm mt-1 bg-black/20 inline-block px-2 py-1 rounded w-fit border border-white/10">
                    {match.score}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto grid grid-cols-3 gap-2 min-w-[300px]">
                
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">1</p>
                  <div className="grid grid-cols-2 gap-1">
                    <button className={goldBtnClass}>{match.odds.home}</button>
                    <button className={layBtnClass}>{(parseFloat(match.odds.home) + 0.05).toFixed(2)}</button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">X</p>
                  {match.odds.draw !== '-' ? (
                    <div className="grid grid-cols-2 gap-1">
                      <button className="bg-[#1E3A8A] text-white text-sm font-bold py-1.5 rounded-sm">{match.odds.draw}</button>
                      <button className="bg-[#051126] border border-[#1E3A8A] text-gray-400 text-sm font-bold py-1.5 rounded-sm opacity-50">{(parseFloat(match.odds.draw) + 0.1).toFixed(2)}</button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full pt-2 opacity-20">
                      <span className="text-2xl font-bold">-</span>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">2</p>
                  <div className="grid grid-cols-2 gap-1">
                    <button className={goldBtnClass}>{match.odds.away}</button>
                    <button className={layBtnClass}>{(parseFloat(match.odds.away) + 0.05).toFixed(2)}</button>
                  </div>
                </div>

              </div>

              <div className="hidden md:flex flex-col gap-2 border-l border-[#1E3A8A] pl-4 ml-2">
                <button className="text-gray-400 hover:text-[#D4AF37]"><BarChart3 size={18} /></button>
                <button className="text-gray-400 hover:text-[#D4AF37]"><PlayCircle size={18} /></button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};