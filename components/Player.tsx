import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart, Mic2, Volume2, Maximize2 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { getLyrics } from '../services/geminiService';

export const Player: React.FC = () => {
  const { currentSong, isPlaying, togglePlay, nextSong, prevSong } = usePlayer();
  const [progress, setProgress] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [lyricsText, setLyricsText] = useState("Carregando...");

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
      if(showLyrics && currentSong) {
          setLyricsText("Gerando letra com IA...");
          getLyrics(currentSong).then(setLyricsText);
      }
  }, [showLyrics, currentSong]);

  if (!currentSong) return null;

  return (
    <>
      {/* Lyrics Overlay */}
      {showLyrics && (
          <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center p-8 backdrop-blur-md animate-fade-in">
              <button onClick={() => setShowLyrics(false)} className="absolute top-6 right-6 text-white hover:text-angola-red">
                  <Maximize2 size={32} className="rotate-45" /> {/* Use generic icon as close */}
              </button>
              <div className="text-center max-w-2xl overflow-y-auto h-full">
                  <h2 className="text-2xl font-bold text-angola-yellow mb-2">{currentSong.title}</h2>
                  <h3 className="text-lg text-gray-400 mb-8">{currentSong.artist}</h3>
                  <p className="whitespace-pre-wrap text-lg leading-relaxed text-gray-200">{lyricsText}</p>
              </div>
          </div>
      )}

      {/* Main Bar */}
      <div className="fixed bottom-[60px] md:bottom-0 left-0 md:left-64 right-0 bg-zinc-900 border-t border-zinc-800 p-4 flex items-center justify-between z-30 shadow-2xl">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title} 
            className={`w-14 h-14 rounded object-cover border border-zinc-700 ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''} `} 
          />
          <div className="hidden sm:block overflow-hidden">
            <h4 className="font-bold text-white truncate hover:underline cursor-pointer">{currentSong.title}</h4>
            <p className="text-xs text-gray-400 hover:text-white cursor-pointer">{currentSong.artist}</p>
          </div>
          <button className="text-gray-400 hover:text-angola-red ml-2">
            <Heart size={20} />
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-6 mb-2">
            <button className="text-gray-400 hover:text-white hidden sm:block"><Shuffle size={18} /></button>
            <button onClick={prevSong} className="text-gray-200 hover:text-white"><SkipBack size={24} fill="currentColor" /></button>
            <button 
                onClick={togglePlay} 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button onClick={nextSong} className="text-gray-200 hover:text-white"><SkipForward size={24} fill="currentColor" /></button>
            <button className="text-gray-400 hover:text-white hidden sm:block"><Repeat size={18} /></button>
          </div>
          <div className="w-full flex items-center gap-2 text-xs text-gray-500 font-mono">
            <span>2:15</span>
            <div className="h-1 flex-1 bg-zinc-700 rounded-full overflow-hidden cursor-pointer group">
              <div 
                className="h-full bg-angola-yellow group-hover:bg-angola-red transition-colors" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span>{currentSong.duration}</span>
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex items-center justify-end gap-3 w-1/3">
          <button 
            onClick={() => setShowLyrics(!showLyrics)}
            className={`p-2 rounded-full ${showLyrics ? 'text-angola-red bg-white/10' : 'text-gray-400 hover:text-white'}`}
            title="Ver Letra"
          >
            <Mic2 size={20} />
          </button>
          <div className="hidden lg:flex items-center gap-2 w-24">
            <Volume2 size={20} className="text-gray-400" />
            <div className="h-1 flex-1 bg-zinc-700 rounded-full">
              <div className="h-full w-2/3 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};