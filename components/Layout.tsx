import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, User, Disc, Radio, Star, Settings } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const NavItem: React.FC<{ to: string, icon: any, label: string, active: boolean }> = ({ to, icon: Icon, label, active }) => (
  <Link to={to} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-angola-red text-white font-bold' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
    <Icon size={24} />
    <span className="text-sm md:text-base">{label}</span>
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { currentSong } = usePlayer();

  const navs = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/search', label: 'Buscar', icon: Search },
    { path: '/library', label: 'Biblioteca', icon: Library },
    { path: '/radio', label: 'Rádio Banda', icon: Radio },
    { path: '/premium', label: 'Premium', icon: Star },
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-zinc-900 border-r border-zinc-800 h-full p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-angola-red rounded-full opacity-75 animate-pulse"></div>
                <Disc className="relative z-10 text-angola-yellow" size={32} />
            </div>
          <h1 className="text-2xl font-black tracking-tighter">
            SONS DA <span className="text-angola-red">BANDA</span>
          </h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navs.map((n) => (
            <NavItem key={n.path} to={n.path} icon={n.icon} label={n.label} active={location.pathname === n.path} />
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-800">
           <div className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
              <img src="https://picsum.photos/id/64/100/100" className="w-8 h-8 rounded-full border border-angola-yellow" alt="User" />
              <div className="flex-1">
                  <p className="text-sm font-semibold">Manuel J.</p>
                  <p className="text-xs text-angola-yellow">Plano Free</p>
              </div>
              <Settings size={16} className="text-gray-400" />
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto pb-32 scroll-smooth bg-gradient-to-b from-zinc-900 to-black`}>
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 flex justify-around p-4 pb-6 z-50 backdrop-blur-lg bg-opacity-95">
        {navs.slice(0, 4).map((n) => {
            const Icon = n.icon;
            const active = location.pathname === n.path;
            return (
                <Link key={n.path} to={n.path} className={`flex flex-col items-center gap-1 ${active ? 'text-angola-red' : 'text-gray-400'}`}>
                    <Icon size={24} />
                    <span className="text-[10px]">{n.label}</span>
                </Link>
            )
        })}
      </nav>
    </div>
  );
};