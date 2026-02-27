import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Calendar, ShieldCheck, Landmark, Lock, Edit3, CheckCircle2, AlertCircle, Award } from 'lucide-react';

export const ProfilePage = () => {
  const navigate = useNavigate();
  
  // Dummy User Data (Backend API se aayega)
  const [userData, setUserData] = useState({
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    mobile: "+91 9876543210",
    joinedDate: "Feb 2026",
    upiId: "rahul99@ybl",
    bankAccount: "XXXX-XXXX-1234",
    bankName: "HDFC Bank"
  });

  return (
    <div className="min-h-screen bg-[#051126] text-white animate-fade-in pb-20 md:pb-10 relative">
      
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-[#051126] border-b sub-border p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-md">
        <button 
          onClick={() => navigate(-1)} 
          className="p-1.5 md:p-2 card-bg rounded-full hover:bg-[#1E3A8A] transition"
        >
          <ArrowLeft size={20} className="gold-text" />
        </button>
        <h1 className="text-lg md:text-xl font-bold uppercase tracking-wide flex items-center gap-2">
          <User className="gold-text" size={20} /> My Profile
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-3 md:p-8 mt-2 md:mt-4 space-y-4 md:space-y-6">
        
        {/* ============================== */}
        {/* 1. TOP BANNER (USER INFO & KYC) */}
        {/* ============================== */}
        <div className="bg-gradient-to-r from-[#1E3A8A]/40 to-[#0a192f] border sub-border rounded-lg p-5 md:p-8 shadow-lg flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#D4AF37] bg-[#051126] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <User size={50} className="text-[#D4AF37]" />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#D4AF37] text-black p-2 rounded-full hover:scale-110 transition border-2 border-[#051126]">
              <Edit3 size={16} />
            </button>
          </div>

          {/* User Details */}
          <div className="text-center md:text-left flex-1 z-10">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">{userData.name}</h2>
             
            </div>
            <p className="text-gray-400 text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
              <Calendar size={14} /> Joined {userData.joinedDate}
            </p>
            
            {/* VIP Level Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/50 border sub-border px-4 py-1.5 rounded-sm">
              <Award size={18} className="gold-text" />
              <span className="text-sm font-bold gold-text uppercase tracking-widest">Gold Tier Member</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* ============================== */}
          {/* 2. PERSONAL DETAILS FORM */}
          {/* ============================== */}
          <div className="md:col-span-2 card-bg border sub-border rounded-lg p-5 md:p-6 shadow-lg">
            <div className="flex justify-between items-center border-b sub-border pb-3 mb-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <ShieldCheck className="gold-text" size={20} /> Personal Details
              </h3>
              <button className="text-xs gold-text hover:underline font-bold uppercase">Edit Info</button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-bold mb-1">Full Name (As per Bank/ID)</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input type="text" value={userData.name} readOnly className="w-full bg-[#051126] border sub-border text-gray-300 px-10 py-2.5 rounded-sm focus:outline-none" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-gray-400 uppercase font-bold mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input type="email" value={userData.email} readOnly className="w-full bg-[#051126] border sub-border text-gray-300 px-10 py-2.5 rounded-sm focus:outline-none" />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-400 uppercase font-bold mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input type="text" value={userData.mobile} readOnly className="w-full bg-[#051126] border sub-border text-gray-300 px-10 py-2.5 rounded-sm focus:outline-none" />
                  </div>
                  <p className="text-[10px] text-[#D4AF37] mt-1">* Mobile number cannot be changed directly. Contact support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================== */}
          {/* 3. WITHDRAWAL & SECURITY INFO */}
          {/* ============================== */}
          <div className="space-y-4 md:space-y-6">
            
            {/* Bank/UPI Section */}
            <div className="card-bg border sub-border rounded-lg p-5 shadow-lg">
              <h3 className="font-bold text-base flex items-center gap-2 border-b sub-border pb-3 mb-4">
                <Landmark className="gold-text" size={18} /> Withdrawal Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Primary UPI ID</p>
                  <p className="text-sm font-mono text-white mt-1 bg-[#051126] border sub-border p-2 rounded-sm">{userData.upiId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Bank Account ({userData.bankName})</p>
                  <p className="text-sm font-mono text-white mt-1 bg-[#051126] border sub-border p-2 rounded-sm">{userData.bankAccount}</p>
                </div>
                <button className="w-full py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition rounded-sm text-xs font-bold uppercase tracking-wider">
                  Update Bank Details
                </button>
              </div>
            </div>

            {/* Security Section */}
            <div className="card-bg border sub-border rounded-lg p-5 shadow-lg">
              <h3 className="font-bold text-base flex items-center gap-2 border-b sub-border pb-3 mb-4">
                <Lock className="gold-text" size={18} /> Security
              </h3>
              <p className="text-xs text-gray-400 mb-4">Keep your account secure by updating your password regularly.</p>
              <button className="w-full py-2.5 bg-[#1E3A8A]/50 hover:bg-[#1E3A8A] border sub-border text-white transition rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                <Lock size={14} /> Change Password
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};