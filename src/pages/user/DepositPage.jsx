import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, Smartphone, Landmark, CreditCard, Bitcoin, ShieldCheck, Info, X, Copy, CheckCircle2 } from 'lucide-react';

export const DepositPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('1000');
  const [selectedMethod, setSelectedMethod] = useState('upi');
  
  // Modal State
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [utrNumber, setUtrNumber] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Quick amount buttons
  const quickAmounts = ['500', '1000', '5000', '10000', '50000'];

  // Payment Methods Array
  const paymentMethods = [
    { id: 'upi', name: 'UPI / QR Code', desc: 'Google Pay, PhonePe', icon: <Smartphone size={20} className="md:w-6 md:h-6" />, tag: 'Popular', fee: 'No Fee' },
    { id: 'bank', name: 'Bank Transfer', desc: 'IMPS / NEFT', icon: <Landmark size={20} className="md:w-6 md:h-6" />, tag: '', fee: 'No Fee' },
    { id: 'crypto', name: 'Crypto (USDT)', desc: 'Tether TRC20', icon: <Bitcoin size={20} className="md:w-6 md:h-6" />, tag: '+5% Bonus', fee: 'Network Fee' },
    { id: 'card', name: 'Card Payment', desc: 'Visa / Mastercard', icon: <CreditCard size={20} className="md:w-6 md:h-6" />, tag: '', fee: '2% Fee' },
  ];

  // Dummy UPI ID for Demo
  const adminUpiId = "royal1008@icici";

  const handleDeposit = (e) => {
    e.preventDefault();
    if(Number(amount) < 500) {
        alert("Minimum deposit amount is ₹500");
        return;
    }
    
    if(selectedMethod === 'upi') {
        setShowPaymentGateway(true);
    } else {
        alert(`Redirecting to ${selectedMethod.toUpperCase()} Payment Gateway for ₹${amount}...`);
    }
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(adminUpiId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleFinalSubmit = () => {
      if(utrNumber.length < 12) {
          alert("Please enter a valid 12-digit UTR/Reference Number");
          return;
      }
      alert(`Payment Request for ₹${amount} with UTR ${utrNumber} submitted successfully! It will be credited to your wallet in 5-10 minutes.`);
      setShowPaymentGateway(false);
      navigate('/wallet'); // Redirect back to wallet or history
  };

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
          <Wallet className="gold-text" size={20} /> Deposit Funds
        </h1>
      </div>

      <div className="max-w-3xl mx-auto p-3 md:p-8 mt-2 md:mt-4 space-y-4 md:space-y-6">
        
        {/* CURRENT BALANCE BOX */}
        <div className="bg-gradient-to-r from-[#1E3A8A]/40 to-[#0a192f] border sub-border rounded-lg p-4 md:p-6 flex justify-between items-center shadow-lg">
          <div>
            <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Current Balance</p>
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-white">
              ₹ <span className="gold-text">5,420.00</span>
            </h2>
          </div>
          <ShieldCheck className="text-[#D4AF37] opacity-50 w-8 h-8 md:w-10 md:h-10" />
        </div>

        <form onSubmit={handleDeposit} className="space-y-6 md:space-y-8">
          
          {/* 1. ENTER AMOUNT SECTION */}
          <div className="card-bg border sub-border rounded-lg p-4 md:p-6 shadow-lg">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2 border-b sub-border pb-2">
              <span className="bg-[#D4AF37] text-black w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs md:text-sm">1</span> 
              Enter Amount
            </h3>
            
            <div className="relative mb-3 md:mb-4">
              <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-xl md:text-2xl font-bold gold-text">₹</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#051126] border-2 sub-border text-white text-xl md:text-2xl font-bold px-10 md:px-12 py-3 md:py-4 rounded-md focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder-gray-600"
                placeholder="0.00"
                min="500"
                required
              />
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {quickAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-1.5 md:py-2 text-sm md:text-base rounded-sm font-bold border transition-all ${amount === val ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#051126] text-gray-300 sub-border hover:border-[#D4AF37]'}`}
                >
                  +{val}
                </button>
              ))}
            </div>
            <p className="text-[10px] md:text-xs text-gray-400 mt-2 md:mt-3 flex items-start md:items-center gap-1">
              <Info size={12} className="shrink-0 mt-0.5 md:mt-0" /> Minimum deposit is ₹500. Maximum is ₹500,000.
            </p>
          </div>

          {/* 2. SELECT PAYMENT METHOD SECTION */}
          <div className="card-bg border sub-border rounded-lg p-4 md:p-6 shadow-lg">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2 border-b sub-border pb-2">
              <span className="bg-[#D4AF37] text-black w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs md:text-sm">2</span> 
              Select Payment Method
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`relative p-3 md:p-4 rounded-md border-2 cursor-pointer transition-all flex items-center gap-3 md:gap-4 ${selectedMethod === method.id ? 'bg-[#1E3A8A]/30 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'bg-[#051126] sub-border hover:border-[#D4AF37]/50'}`}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id ? 'border-[#D4AF37]' : 'border-gray-500'}`}>
                    {selectedMethod === method.id && <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#D4AF37] rounded-full"></div>}
                  </div>

                  <div className={`p-1.5 md:p-2 shrink-0 rounded-full ${selectedMethod === method.id ? 'bg-[#D4AF37] text-black' : 'bg-[#1E3A8A] gold-text'}`}>
                    {method.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm md:text-base truncate">{method.name}</h4>
                    <p className="text-[10px] md:text-xs text-gray-400 truncate">{method.desc}</p>
                  </div>

                  <div className="text-right shrink-0">
                    {method.tag && <span className="block text-[8px] md:text-[10px] font-bold bg-green-600/20 text-green-500 px-1 md:px-2 py-0.5 rounded uppercase mb-1">{method.tag}</span>}
                    <span className="text-[8px] md:text-[10px] text-gray-500 uppercase block">{method.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WARNING MESSAGE */}
          <div className="bg-red-500/10 border border-red-500/30 p-3 md:p-4 rounded-md flex items-start gap-2 md:gap-3">
            <ShieldCheck className="text-red-400 mt-0.5 shrink-0 w-4 h-4 md:w-5 md:h-5" />
            <p className="text-[10px] md:text-sm text-gray-300 leading-tight md:leading-normal">
              <strong className="text-red-400">Important:</strong> The name on your Bank Account / UPI must match your registered Royal1008 profile name exactly. Payments from third-party accounts will be rejected.
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="gold-btn py-3 md:py-4 text-base md:text-lg">
            Proceed to Pay ₹ {amount || '0'}
          </button>

        </form>
      </div>

      {/* ========================================== */}
      {/* 3. PAYMENT GATEWAY POPUP (UPI SPECIFIC) */}
      {/* ========================================== */}
      {showPaymentGateway && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="card-bg border-2 border-[#D4AF37] rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.3)] w-full max-w-md relative my-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowPaymentGateway(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white transition z-10 p-1 bg-black/50 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="p-4 md:p-6 text-center border-b sub-border pt-8 md:pt-6">
              <h2 className="text-lg md:text-xl font-bold uppercase gold-text mb-1">Make Payment</h2>
              <p className="text-xs md:text-sm text-gray-400">Scan QR or Copy UPI ID to pay <strong className="text-white">₹{amount}</strong></p>
            </div>

            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              
              {/* Fake QR Code Area */}
              <div className="flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-md p-2 flex items-center justify-center">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${adminUpiId}&pn=Royal1008&am=${amount}&cu=INR`} alt="UPI QR" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Copy UPI ID */}
              <div className="bg-[#051126] border sub-border rounded-md p-2 md:p-3 flex justify-between items-center">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold">Official UPI ID</p>
                  <p className="font-mono text-sm md:text-lg text-white truncate">{adminUpiId}</p>
                </div>
                <button 
                  onClick={handleCopyUPI}
                  className="bg-[#1E3A8A]/50 hover:bg-[#1E3A8A] p-1.5 md:p-2 rounded transition text-[#D4AF37] shrink-0"
                >
                  {isCopied ? <CheckCircle2 size={16} className="md:w-5 md:h-5 text-green-400" /> : <Copy size={16} className="md:w-5 md:h-5" />}
                </button>
              </div>

              {/* UTR Input Form */}
              <div className="pt-3 md:pt-4 border-t sub-border">
                <label className="block text-xs md:text-sm font-bold text-gray-300 mb-1.5 md:mb-2">Step 2: Enter 12-Digit UTR/Ref No.</label>
                <input 
                  type="text" 
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value.replace(/\D/g, ''))} // Sirf numbers allow honge
                  placeholder="e.g. 325148965874" 
                  maxLength="12"
                  className="w-full bg-[#051126] border sub-border text-white px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-md focus:outline-none focus:border-[#D4AF37] font-mono tracking-widest"
                />
                <p className="text-[9px] md:text-[10px] text-red-400 mt-1 leading-tight">* Mandatory field. Wrong UTR will result in payment rejection.</p>
              </div>

              <button onClick={handleFinalSubmit} className="gold-btn py-2.5 md:py-3 text-sm md:text-base mt-2">
                Confirm Deposit
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};