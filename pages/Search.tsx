import React, { useState } from 'react';
import { Search as SearchIcon, Sparkles, Mic } from 'lucide-react';
import { GENRE_COLORS, MOCK_SONGS } from '../constants';
import { usePlayer } from '../context/PlayerContext';
import { getMusicRecommendation, discoverNewTalent } from '../services/geminiService';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const { playSong } = usePlayer();

  const handleAiSearch = async () => {
    if (!aiPrompt) return;
    setLoadingAi(true);
    setAiResponse(null);
    const result = await getMusicRecommendation(aiPrompt);
    setAiResponse(result);
    setLoadingAi(false);
  };

  const handleNewTalent = async () => {
      setLoadingAi(true);
      const result = await discoverNewTalent();
      setAiResponse(result);
      setLoadingAi(false);
  }

  const filteredSongs = MOCK_SONGS.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 pb-32 max-w-6xl mx-auto">
      {/* Search Input */}
      <div className="relative mb-10">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="O que queres ouvir? Artistas, músicas ou géneros..." 
          className="w-full pl-12 pr-4 py-4 rounded-full bg-zinc-800 border border-transparent focus:border-angola-red focus:bg-zinc-700 outline-none text-white text-lg transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm ? (
        // Search Results
        <div>
           <h2 className="text-xl font-bold mb-4">Resultados</h2>
           {filteredSongs.length > 0 ? (
               <div className="space-y-2">
                   {filteredSongs.map(song => (
                       <div key={song.id} onClick={() => playSong(song)} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg cursor-pointer group">
                           <img src={song.cover} alt={song.title} className="w-12 h-12 rounded" />
                           <div className="flex-1">
                               <h3 className="font-medium group-hover:text-angola-yellow">{song.title}</h3>
                               <p className="text-sm text-gray-400">{song.artist}</p>
                           </div>
                           <span className="text-sm text-gray-500">{song.duration}</span>
                       </div>
                   ))}
               </div>
           ) : (
               <p className="text-gray-500">Nenhum resultado encontrado para "{searchTerm}".</p>
           )}
        </div>
      ) : (
        // Browse Categories & AI
        <>
            {/* AI Assistant Section */}
            <div className="mb-12 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-angola-yellow" />
                    <h2 className="text-xl font-bold">DJ Virtual Inteligente</h2>
                </div>
                <div className="flex gap-2 mb-4">
                    <input 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Ex: 'Quero músicas para um churrasco de domingo'"
                        className="flex-1 bg-black/30 border border-zinc-600 rounded-lg px-4 py-2 focus:border-angola-yellow outline-none"
                    />
                    <button 
                        onClick={handleAiSearch}
                        disabled={loadingAi}
                        className="bg-angola-yellow text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
                    >
                        {loadingAi ? 'Pensando...' : 'Pedir'}
                    </button>
                </div>
                <div className="flex gap-2 mb-4">
                    <button onClick={handleNewTalent} className="text-xs text-angola-red underline hover:text-white">Descobrir Talento Fictício (IA)</button>
                </div>
                
                {aiResponse && (
                    <div className="bg-black/40 p-4 rounded-lg border border-white/5 animate-in fade-in slide-in-from-top-2">
                        <p className="text-gray-200 whitespace-pre-wrap">{aiResponse}</p>
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-bold mb-6">Navegar por Género</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.keys(GENRE_COLORS).map((genre) => (
                    <div 
                        key={genre}
                        className={`h-40 rounded-xl p-4 relative overflow-hidden bg-gradient-to-br ${GENRE_COLORS[genre]} hover:scale-[1.02] transition-transform cursor-pointer shadow-lg`}
                    >
                        <h3 className="text-2xl font-bold absolute top-4 left-4 z-10">{genre}</h3>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl transform rotate-12"></div>
                        <img 
                            src={`https://picsum.photos/seed/${genre}/200/200`} 
                            className="absolute bottom-2 right-2 w-20 h-20 shadow-lg rotate-[25deg] rounded-md" 
                            alt={genre} 
                        />
                    </div>
                ))}
            </div>
        </>
      )}
    </div>
  );
};