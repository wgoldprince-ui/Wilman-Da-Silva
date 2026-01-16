import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song } from '../types';
import { MOCK_SONGS } from '../constants';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  playSong: (song: Song) => void;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  addToQueue: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    } else if (MOCK_SONGS.length > 0) {
      playSong(MOCK_SONGS[0]);
    }
  };

  const nextSong = () => {
    // Simple logic: pick random for now if queue empty, or next in mock list
    if (!currentSong) return;
    const currentIndex = MOCK_SONGS.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % MOCK_SONGS.length;
    playSong(MOCK_SONGS[nextIndex]);
  };

  const prevSong = () => {
    if (!currentSong) return;
    const currentIndex = MOCK_SONGS.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + MOCK_SONGS.length) % MOCK_SONGS.length;
    playSong(MOCK_SONGS[prevIndex]);
  };

  const addToQueue = (song: Song) => {
    setQueue([...queue, song]);
  };

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, queue, playSong, togglePlay, nextSong, prevSong, addToQueue }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};