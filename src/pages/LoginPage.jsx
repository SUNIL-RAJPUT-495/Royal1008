import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
// Apna logo import karna na bhulein
import logo from '../assets/logo.png'; 

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // --- ROYAL THEME STYLES ---
  const goldBtnClass = "w-full py-3 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm";
  const inputClass = "w-full bg-[#051126] border border-[#1E3A8A] text-white px-10 py-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder-gray-500";
  const goldText = "text-[#D4AF37]";
  const goldBorder = "border-[#D4AF37]"; // Yeh variable zaroori hai
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";

  return (
    <div className="min-h-screen bg-[#051126] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#1E3A8A] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

      {/* --- BACK BUTTON --- */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors z-50 font-bold uppercase text-sm"
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* --- MAIN CARD CONTAINER --- */}
      <div className="bg-[#0a192f] border border-[#D4AF37]/30 w-full max-w-5xl h-auto md:h-[650px] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] flex overflow-hidden relative z-10 flex-col md:flex-row">
        
        {/* --- LEFT SIDE: IMAGE (Hidden on mobile) --- */}
        <div className="hidden md:flex w-1/2 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center relative flex-col justify-between p-12">
          <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-[#051126]/60 to-[#051126]/30"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37] rounded-full px-3 py-1 bg-black/40 backdrop-blur-md mb-4">
              <Crown size={16} className={goldText} />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Royal1008 VIP</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              WIN LIKE A <br /> <span className={textGoldGradient}>LEGEND.</span>
            </h1>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className={goldText} size={20} />
              <p className="text-gray-300 text-sm font-medium">Instant Withdrawals 24/7</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className={goldText} size={20} />
              <p className="text-gray-300 text-sm font-medium">Highest Odds in the Market</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#0a192f]">
          
          {/* --- UPDATED LOGO SECTION --- */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              
              {/* Logo Circle without padding */}
              <div className={`relative h-14 w-14 rounded-full border-2 ${goldBorder} bg-black/40 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center overflow-hidden transition-transform`}>
                {logo ? (
                  <img
                    src={logo}
                    alt="Royal Logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Crown className="h-8 w-8 text-[#D4AF37]" />
                )}
              </div>

              {/* Text */}
              <span className="text-2xl font-bold tracking-wider text-white">
                ROYAL<span className={textGoldGradient}>1008</span>
              </span>

            </div>
          </div>
          {/* --- END LOGO SECTION --- */}

          {/* TOGGLE TABS */}
          <div className="flex p-1 bg-[#051126] rounded-sm mb-8 border border-[#1E3A8A]">
            <button 
              className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${isLogin ? 'bg-[#D4AF37] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${!isLogin ? 'bg-[#D4AF37] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* FORM FIELDS */}
          <form className="space-y-5 animate-fade-in">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
                <input type="text" placeholder="Full Name" className={inputClass} />
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
              <input type="text" placeholder={isLogin ? "Username or Email" : "Email Address"} className={inputClass} />
            </div>

            {!isLogin && (
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
                <input type="tel" placeholder="Phone Number" className={inputClass} />
              </div>
            )}

            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className={inputClass} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#D4AF37] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {!isLogin && (
               <div className="flex items-start gap-2">
                 <input type="checkbox" className="mt-1 accent-[#D4AF37] bg-transparent" />
                 <p className="text-xs text-gray-400">
                   I agree to the <span className="text-[#D4AF37] cursor-pointer hover:underline">Terms & Conditions</span>.
                 </p>
               </div>
            )}

            <button 
                type="button" 
                onClick={() => navigate('/casino')} 
                className={goldBtnClass}
            >
              {isLogin ? 'Login to Account' : 'Create Free Account'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};