import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { Layout } from './components/Layout';
import { Player } from './components/Player';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Library } from './pages/Library';
import { Premium } from './pages/Premium';

// Fallback for missing pages
const Radio = () => <div className="p-10 text-center"><h1 className="text-3xl font-bold">Rádio Banda</h1><p>Em breve: estações ao vivo de Luanda.</p></div>;

const App: React.FC = () => {
  return (
    <PlayerProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Player />
        </Layout>
      </HashRouter>
    </PlayerProvider>
  );
};

export default App;