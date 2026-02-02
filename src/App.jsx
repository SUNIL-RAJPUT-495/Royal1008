import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout.jsx";
import { Landingpage } from "./pages/Landingpage.jsx";
import { CasinoPage } from "./pages/CasinoPage.jsx";
import { CricketPage } from './pages/CricketPage.jsx';
import {FootballPage} from './pages/FootballPage.jsx';
import {TennisPage} from './pages/TennisPage.jsx';
import {HorseRacingPage} from './pages/HorseRacingPage.jsx';
import {GreyhoundPage} from './pages/GreyhoundPage.jsx';
import {InPlayPage} from './pages/InPlayPage.jsx';
import { PromotionsPage } from './pages/PromotionsPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import {ColorTradingPage} from './pages/ColorTradingPage.jsx';
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/promotions" element={<PromotionsPage />} />

      <Route element={<MainLayout />}>
        
        <Route path="/casino" element={<CasinoPage />} />
        <Route path="/cricket" element={<CricketPage/>} />
        <Route path="/football" element={<FootballPage/>} />
        <Route path="/tennis" element={<TennisPage/>} />
        <Route path="/horseracing" element={<HorseRacingPage/>} />
        <Route path="/greyhound" element={<GreyhoundPage/>} />
        <Route path="/inplay" element={<InPlayPage/>} />
        <Route path="/colortrading" element={<ColorTradingPage/>} />
      </Route>

    </Routes>
  );
}

export default App;