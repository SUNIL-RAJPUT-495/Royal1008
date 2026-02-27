import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Trophy, Star, ChevronRight, BarChart3, Info } from 'lucide-react';
import Axios from "../../utils/axios";
import SummaryApi from '../../common/SummeryApi';
import { useNavigate } from 'react-router-dom';

export const CricketPage = () => {
  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        setLoading(true);
        const response = await Axios({
          url: SummaryApi.CricketLive.url,
          method: SummaryApi.CricketLive.method
        });

        console.log("Backend se Live Match Data aya: ", response.data);

        if (response.data && response.data.data) {
          const formattedMatches = response.data.data.map((match, index) => ({
            id: match._id || match.id || index,
            league: match.tournamentName || match.league || "Cricket Series",
            team1: match.team1 || match.teams?.[0] || "Team A",
            team2: match.team2 || match.teams?.[1] || "Team B",
            time: match.matchStatus || "LIVE NOW",
            isLive: true,
            score: match.liveScore || match.score || "Scores Loading...",
            odds: match.odds || { team1: "1.85", draw: "-", team2: "2.10" }
          }));
          setLiveMatches(formattedMatches);
        }
      } catch (error) {
        console.error("Backend API Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, []);



  const featuredMatch = liveMatches.length > 0 ? liveMatches[0] : null;


  const remainingMatches = liveMatches;

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Trophy className={goldText} /> Cricket Exchange
          </h1>
          <p className="text-gray-400 text-sm mt-1">Bet on the world's biggest cricket events.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'IPL', 'World Cup', 'Test', 'T20'].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-sm text-sm font-bold border ${index === 0 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#051126] text-gray-300 border-[#1E3A8A] hover:border-[#D4AF37]'} transition-all whitespace-nowrap`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {featuredMatch && !loading && (
        <div className="relative rounded-lg overflow-hidden mb-10 border border-[#D4AF37]/30 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#0a192f] to-[#000000] z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074984-61e663d3f94f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 z-0"></div>

          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE NOW</span>

              {/* DYNAMIC TEAM NAMES */}
              <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-2 uppercase">
                {featuredMatch.team1} <span className={goldText}>vs</span> {featuredMatch.team2}
              </h2>

              {/* DYNAMIC LEAGUE & SCORE */}
              <p className="text-gray-300 text-lg">{featuredMatch.league}</p>
              <p className="text-[#D4AF37] font-mono mt-2 text-xl">{featuredMatch.score}</p>
            </div>

            <div className="flex gap-4">
              <div className="text-center">
                {/* DYNAMIC TEAM 1 ODDS */}
                <p className="text-gray-400 text-xs mb-1 uppercase truncate w-24">{featuredMatch.team1}</p>
                <button className={`${goldBtnClass} px-8 py-3 text-xl`}>
                  {featuredMatch.odds?.team1 || '1.85'}
                </button>
              </div>
              <div className="text-center">
                {/* DYNAMIC TEAM 2 ODDS */}
                <p className="text-gray-400 text-xs mb-1 uppercase truncate w-24">{featuredMatch.team2}</p>
                <button className="px-8 py-3 text-xl bg-[#051126] border border-[#D4AF37] text-[#D4AF37] rounded-sm font-bold hover:bg-[#D4AF37] hover:text-black transition">
                  {featuredMatch.odds?.team2 || '2.10'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MATCH LIST SECTION */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold border-l-4 border-[#D4AF37] pl-3 mb-4">Upcoming & Live Matches</h2>

        {/* LOADING STATE */}
        {loading ? (
          <div className="text-center text-[#D4AF37] py-10">Loading Matches from Backend...</div>
        ) : liveMatches.length === 0 ? (
          <div className="text-center text-gray-400 py-10">No live matches found right now.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* DYNAMIC DATA RENDER */}
            {remainingMatches.map((match) => (
              <div
                key={match.id}
                onClick={() => navigate(`/match/${match.id}`)} 
                className={`${cardBg} border ${subBorder} rounded-sm p-4 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
              >

                <div className="flex justify-between items-start mb-4 border-b border-[#1E3A8A] pb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                      {match.isLive ? <span className="flex items-center gap-1 text-red-500"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> LIVE</span> : <Calendar size={12} />}
                      {match.league}
                    </div>
                    <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                      {match.isLive ? match.score : <><Clock size={12} /> {match.time}</>}
                    </div>
                  </div>
                  <Star size={18} className="text-gray-600 hover:text-[#D4AF37] cursor-pointer" />
                </div>

                <div className="grid grid-cols-12 gap-2 items-center">

                  {/* TEAMS */}
                  <div className="col-span-12 md:col-span-5 mb-4 md:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">{match.team1}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{match.team2}</span>
                    </div>
                  </div>

                  {/* ODDS BUTTONS */}
                  <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-2">
                    <div className="flex flex-col gap-1">
                      <button className="bg-[#D4AF37] text-black font-bold py-2 rounded-sm hover:brightness-110 transition">{match.odds?.team1 || '1.85'}</button>
                      <span className="text-[10px] text-center text-gray-500">Back</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <button className="bg-[#1E3A8A] text-white font-bold py-2 rounded-sm border border-[#1E3A8A] cursor-default opacity-60">{match.odds?.draw || '-'}</button>
                      <span className="text-[10px] text-center text-gray-500">Draw</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <button className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] font-bold py-2 rounded-sm hover:bg-[#D4AF37] hover:text-black transition">{match.odds?.team2 || '2.10'}</button>
                      <span className="text-[10px] text-center text-gray-500">Lay</span>
                    </div>
                  </div>

                </div>

                <div className="mt-4 pt-3 border-t border-[#1E3A8A]/50 flex justify-between items-center">
                  <div className="flex gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><BarChart3 size={14} /> Stats</span>
                    <span className="flex items-center gap-1"><Info size={14} /> Rules</span>
                  </div>
                  <button className="text-[#D4AF37] text-xs font-bold flex items-center hover:underline">
                    MORE MARKETS <ChevronRight size={14} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};