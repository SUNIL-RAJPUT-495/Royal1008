import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import Axios from "../../utils/axios";
import logo from '../../assets/logo.png'; 
import SummaryApi from '../../common/SummeryApi';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',    // Login ke time isko hi 'emailOrMobile' maan lenge
    mobile: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // --- ROYAL THEME STYLES ---
  const goldBtnClass = "w-full py-3 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm disabled:opacity-70";
  const inputClass = "w-full bg-[#051126] border border-[#1E3A8A] text-white px-10 py-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder-gray-500";
  const goldText = "text-[#D4AF37]";
  const goldBorder = "border-[#D4AF37]";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";

  // --- INPUT HANDLER ---
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrorMsg(''); // Type karte hi purana error hata do
  };

  // --- API CALL LOGIC ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Form ko page reload karne se rokna
    setLoading(true);
    setErrorMsg('');

    try {
      if (isLogin) {
        // --- LOGIN API CALL ---
        // User ne login route ko "verify" naam diya hai SummaryApi mein
        const response = await Axios({
          url: SummaryApi.verify.url,
          method: SummaryApi.verify.method,
          data: {
            emailOrMobile: formData.email, // backend controller expects emailOrMobile
            password: formData.password
          }
        });

        if (response.data.success) {
          // Token ko local storage mein save karo taaki session bani rahe
          localStorage.setItem('token', response.data.token);
          // Redirect to Casino / Home
          navigate('/casino'); 
        }

      } else {
        // --- REGISTER API CALL ---
        const response = await Axios({
          url: SummaryApi.register.url,
          method: SummaryApi.register.method,
          data: {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            password: formData.password
          }
        });

        if (response.data.success) {
          // Register hote hi auto-login
          localStorage.setItem('token', response.data.token);
          navigate('/casino');
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      // Backend se jo error message aaya hai wo dikhayenge (e.g. "Invalid credentials")
      setErrorMsg(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Jab tabs (Login/Signup) switch karein toh form clear kar dein
  const toggleMode = (mode) => {
    setIsLogin(mode);
    setErrorMsg('');
    setFormData({ name: '', email: '', mobile: '', password: '' });
  };

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
          
          {/* --- LOGO SECTION --- */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className={`relative h-14 w-14 rounded-full border-2 ${goldBorder} bg-black/40 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center overflow-hidden transition-transform`}>
                {logo ? (
                  <img src={logo} alt="Royal Logo" className="h-full w-full object-cover" />
                ) : (
                  <Crown className="h-8 w-8 text-[#D4AF37]" />
                )}
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">
                ROYAL<span className={textGoldGradient}>1008</span>
              </span>
            </div>
          </div>

          {/* TOGGLE TABS */}
          <div className="flex p-1 bg-[#051126] rounded-sm mb-6 border border-[#1E3A8A]">
            <button 
              type="button"
              className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${isLogin ? 'bg-[#D4AF37] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => toggleMode(true)}
            >
              Login
            </button>
            <button 
              type="button"
              className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all ${!isLogin ? 'bg-[#D4AF37] text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => toggleMode(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Error Message Display */}
          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm text-center py-2 rounded mb-4 animate-fade-in">
              {errorMsg}
            </div>
          )}

          {/* FORM FIELDS */}
          {/* NOTE: onSubmit yahan lagaya hai */}
          <form className="space-y-5 animate-fade-in" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  placeholder="Full Name" 
                  className={inputClass} 
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder={isLogin ? "Email or Mobile No." : "Email Address"} 
                className={inputClass} 
                required
              />
            </div>

            {!isLogin && (
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
                <input 
                  type="tel" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleOnChange}
                  placeholder="Phone Number" 
                  className={inputClass} 
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder="Password" 
                className={inputClass} 
                required
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
                 <input type="checkbox" required className="mt-1 accent-[#D4AF37] bg-transparent" />
                 <p className="text-xs text-gray-400">
                   I agree to the <span className="text-[#D4AF37] cursor-pointer hover:underline">Terms & Conditions</span>.
                 </p>
               </div>
            )}

            {/* Changed type to "submit" taaki form handle ho sake */}
            <button 
                type="submit" 
                disabled={loading}
                className={goldBtnClass}
            >
              {loading ? "Processing..." : (isLogin ? 'Login to Account' : 'Create Free Account')}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};