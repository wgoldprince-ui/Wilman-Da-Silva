import React from 'react';
import { Play, TrendingUp, Sparkles, Disc } from 'lucide-react';
import { MOCK_SONGS, MOCK_ARTISTS, MOCK_PLAYLISTS } from '../constants';
import { usePlayer } from '../context/PlayerContext';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="mb-6 mt-10">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
);

export const Home: React.FC = () => {
  const { playSong } = usePlayer();
  const featuredSong = MOCK_SONGS[0];

  return (
    <div className="pb-32">
        {/* Hero Banner */}
        <div className="relative h-96 w-full bg-gradient-to-r from-angola-red via-red-900 to-black p-8 flex items-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e3726?auto=format&fit=crop&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-angola-yellow text-black text-xs font-bold rounded-full mb-4">
                    DESTAQUE DA SEMANA
                </span>
                <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none">
                    O Melhor do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Kizomba 2025</span>
                </h1>
                <p className="text-gray-200 mb-6 text-lg">Sente o ritmo da banda com as novidades de Anselmo Ralph e Pérola.</p>
                <div className="flex gap-4">
                    <button 
                        onClick={() => playSong(featuredSong)}
                        className="bg-angola-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-red-900/50"
                    >
                        <Play fill="currentColor" size={20} />
                        Ouvir Agora
                    </button>
                    <button className="bg-black/30 hover:bg-black/50 border border-white/20 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm">
                        Salvar na Biblioteca
                    </button>
                </div>
            </div>
        </div>

        <div className="px-6 md:px-12">
            {/* Quick Stats/Filters */}
            <div className="flex gap-4 overflow-x-auto py-6 no-scrollbar">
                {['Kuduro', 'Semba', 'Kizomba', 'Afro House', 'Rap'].map(genre => (
                    <button key={genre} className="px-6 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 whitespace-nowrap border border-zinc-700 text-sm font-medium transition-colors">
                        {genre}
                    </button>
                ))}
            </div>

            <SectionHeader title="Tendências em Angola" subtitle="O que está a bater nos musseques e na cidade." />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {MOCK_SONGS.map((song) => (
                    <div 
                        key={song.id} 
                        className="group bg-zinc-900/50 p-4 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer"
                        onClick={() => playSong(song)}
                    >
                        <div className="relative mb-4">
                            <img src={song.cover} alt={song.title} className="w-full aspect-square object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
                            <div className="absolute bottom-2 right-2 w-10 h-10 bg-angola-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                                <Play fill="currentColor" size={20} className="ml-1" />
                            </div>
                        </div>
                        <h3 className="font-bold truncate text-white">{song.title}</h3>
                        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                    </div>
                ))}
            </div>

            <SectionHeader title="Playlists Editoriais" subtitle="Curadoria feita à medida para ti." />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MOCK_PLAYLISTS.map((playlist) => (
                    <div key={playlist.id} className="flex bg-zinc-800 rounded-lg overflow-hidden hover:bg-zinc-700 transition-colors group cursor-pointer">
                        <img src={playlist.cover} className="w-32 h-32 object-cover" alt={playlist.title} />
                        <div className="p-4 flex flex-col justify-center">
                            <h3 className="font-bold text-lg">{playlist.title}</h3>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{playlist.description}</p>
                            <div className="mt-3 text-angola-red text-xs font-bold uppercase tracking-wider group-hover:underline">
                                Tocar Mix
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <SectionHeader title="Artistas Populares" />
            <div className="flex gap-8 overflow-x-auto pb-8">
                {MOCK_ARTISTS.map(artist => (
                    <div key={artist.id} className="flex flex-col items-center min-w-[140px] cursor-pointer group">
                        <img src={artist.image} className="w-32 h-32 rounded-full object-cover mb-3 border-2 border-transparent group-hover:border-angola-yellow transition-all" alt={artist.name} />
                        <h4 className="font-medium text-center">{artist.name}</h4>
                        <span className="text-xs text-gray-500">{artist.genre}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};