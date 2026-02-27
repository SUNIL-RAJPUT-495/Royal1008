    import React, { useState } from 'react';
import { Save, ShieldAlert, Settings, DollarSign, Globe, Lock, BellRing, Info } from 'lucide-react';

export const AdminSettings = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "Royal1008",
    maintenanceMode: false,
    minDeposit: 500,
    maxDeposit: 100000,
    minWithdraw: 1000,
    maxWithdraw: 50000,
    referralBonus: 100,
    supportWhatsapp: "+91 9876543210",
    allowNewReg: true
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    // Yahan Backend API hit hogi settings update karne ke liye
    setTimeout(() => {
      setLoading(false);
      alert("System Settings Updated Successfully! 🔥");
    }, 1000);
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b sub-border pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Master System Settings</h2>
          <p className="text-gray-400 text-sm">Control website limits and global configurations</p>
        </div>
        <button 
          onClick={handleUpdate}
          disabled={loading}
          className="gold-btn py-2 px-6 w-auto flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <Save size={18} /> {loading ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* ============================== */}
        {/* 1. FINANCIAL LIMITS (FINANCE) */}
        {/* ============================== */}
        <div className="card-bg border sub-border rounded-lg p-6 space-y-5">
          <h3 className="font-bold text-lg gold-text flex items-center gap-2 border-b sub-border pb-3">
            <DollarSign size={20} /> Deposit & Withdrawal Limits
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Min. Deposit (₹)</label>
              <input 
                type="number" 
                value={settings.minDeposit} 
                onChange={(e) => setSettings({...settings, minDeposit: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Max. Deposit (₹)</label>
              <input 
                type="number" 
                value={settings.maxDeposit} 
                onChange={(e) => setSettings({...settings, maxDeposit: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Min. Withdraw (₹)</label>
              <input 
                type="number" 
                value={settings.minWithdraw} 
                onChange={(e) => setSettings({...settings, minWithdraw: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Max. Withdraw (₹)</label>
              <input 
                type="number" 
                value={settings.maxWithdraw} 
                onChange={(e) => setSettings({...settings, maxWithdraw: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none" 
              />
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* 2. MAINTENANCE & SECURITY */}
        {/* ============================== */}
        <div className="card-bg border sub-border rounded-lg p-6 space-y-5">
          <h3 className="font-bold text-lg text-red-500 flex items-center gap-2 border-b sub-border pb-3">
            <ShieldAlert size={20} /> System Control & Security
          </h3>

          <div className="space-y-4">
            {/* Maintenance Mode Toggle */}
            <div className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/20 rounded-md">
              <div>
                <p className="font-bold text-sm">Maintenance Mode</p>
                <p className="text-[10px] text-gray-500">Stop all user activity on the website</p>
              </div>
              <button 
                onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.maintenanceMode ? 'bg-red-600' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.maintenanceMode ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            {/* Registration Toggle */}
            <div className="flex items-center justify-between p-3 bg-green-500/5 border border-green-500/20 rounded-md">
              <div>
                <p className="font-bold text-sm">Allow New Registrations</p>
                <p className="text-[10px] text-gray-500">Enable/Disable sign-up for new users</p>
              </div>
              <button 
                onClick={() => setSettings({...settings, allowNewReg: !settings.allowNewReg})}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.allowNewReg ? 'bg-green-600' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.allowNewReg ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* ============================== */}
        {/* 3. SUPPORT & CONTACT SETTINGS */}
        {/* ============================== */}
        <div className="card-bg border sub-border rounded-lg p-6 space-y-5 lg:col-span-2">
          <h3 className="font-bold text-lg gold-text flex items-center gap-2 border-b sub-border pb-3">
            <Globe size={20} /> Global Website Configuration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Official WhatsApp Support</label>
              <input 
                type="text" 
                value={settings.supportWhatsapp} 
                onChange={(e) => setSettings({...settings, supportWhatsapp: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none font-mono" 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Referral Commission (₹)</label>
              <input 
                type="number" 
                value={settings.referralBonus} 
                onChange={(e) => setSettings({...settings, referralBonus: e.target.value})}
                className="w-full bg-[#051126] border sub-border text-white px-4 py-2.5 rounded focus:border-[#D4AF37] outline-none" 
              />
            </div>
            <div className="flex items-end">
                <div className="p-3 bg-[#1E3A8A]/20 border border-[#1E3A8A] rounded-md flex items-center gap-2 text-xs text-gray-400">
                    <Info size={16} className="gold-text shrink-0" />
                    Changes will take effect immediately for all users.
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};