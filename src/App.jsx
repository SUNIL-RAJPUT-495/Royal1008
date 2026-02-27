import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout.jsx";
import { Landingpage } from "./pages/user/Landingpage.jsx";
import { CasinoPage } from "./pages/user/CasinoPage.jsx";
import { CricketPage } from './pages/user/CricketPage.jsx';
import { FootballPage } from './pages/user/FootballPage.jsx';
import { TennisPage } from './pages/user/TennisPage.jsx';
import { HorseRacingPage } from './pages/user/HorseRacingPage.jsx';
import { GreyhoundPage } from './pages/user/GreyhoundPage.jsx';
import { InPlayPage } from './pages/user/InPlayPage.jsx';
import { PromotionsPage } from './pages/user/PromotionsPage.jsx';
import { LoginPage } from './pages/user/LoginPage.jsx';
import { ColorTradingPage } from './pages/user/ColorTradingPage.jsx';
import { MatchDetails } from './pages/user/MatchDetails.jsx';
import { DepositPage } from './pages/user/DepositPage.jsx';
import { ProfilePage } from './pages/user/ProfilePage.jsx';
import { WalletPage } from './pages/user/WalletPage.jsx';
import { MyBetsPage } from './pages/user/MyBetsPage.jsx';

// admin
import { AdminLayout } from './layout/AdminLayout.jsx';
import { AdminDashboard } from './pages/admin/AdminDashboard.jsx';
import { AdminUsers } from './pages/admin/AdminUsers.jsx';
import { AdminDeposits } from './pages/admin/AdminDeposits.jsx';
import { AdminWithdrawals } from './pages/admin/AdminWithdrawals.jsx';
import { AdminSettings } from './component/admin/AdminSettings.jsx';
function App() {
  return (
    <Routes>

      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/promotions" element={<PromotionsPage />} />

      <Route element={<MainLayout />}>
        <Route path="/cricket" element={<CricketPage />} />
        <Route path="/casino" element={<CasinoPage />} />

        <Route path="/football" element={<FootballPage />} />
        <Route path="/tennis" element={<TennisPage />} />
        <Route path="/horseracing" element={<HorseRacingPage />} />
        <Route path="/greyhound" element={<GreyhoundPage />} />
        <Route path="/inplay" element={<InPlayPage />} />
        <Route path="/colortrading" element={<ColorTradingPage />} />
        <Route path='/match/:id' element={<MatchDetails />} />
        <Route path='/deposit' element={<DepositPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='bets' element={<MyBetsPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path='users' element={<AdminUsers />} />
        <Route path='deposits' element={<AdminDeposits />} />
        <Route path='withdrawals' element={<AdminWithdrawals />} />
        <Route path='settings' element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;