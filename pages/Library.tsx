import React from 'react';
import { Heart, PlusCircle, Download } from 'lucide-react';
import { MOCK_SONGS } from '../constants';

export const Library: React.FC = () => {
    return (
        <div className="p-8 pb-32">
            <div className="flex items-center gap-6 mb-8">
                <img 
                    src="https://picsum.photos/seed/liked/300/300" 
                    className="w-40 h-40 md:w-52 md:h-52 shadow-2xl rounded-lg bg-gradient-to-br from-indigo-500 to-purple-900" 
                    alt="Liked Songs"
                />
                <div className="flex flex-col justify-end h-full">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Playlist</span>
                    <h1 className="text-5xl md:text-7xl font-black mt-2 mb-4">Músicas Curtidas</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-white font-bold">Manuel J.</span>
                        <span>•</span>
                        <span>{MOCK_SONGS.length} músicas</span>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4 px-4 text-gray-400 border-b border-zinc-800 pb-2">
                    <span># Título</span>
                    <span className="hidden md:block">Álbum</span>
                    <span className="mr-8">Duração</span>
                </div>
                {MOCK_SONGS.map((song, idx) => (
                    <div key={song.id} className="flex items-center justify-between p-3 hover:bg-white/10 rounded-md group transition-colors">
                        <div className="flex items-center gap-4 flex-1">
                            <span className="w-4 text-gray-500">{idx + 1}</span>
                            <img src={song.cover} className="w-10 h-10 rounded" alt="" />
                            <div>
                                <h4 className="font-bold text-white group-hover:text-angola-red">{song.title}</h4>
                                <span className="text-sm text-gray-400">{song.artist}</span>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/3 text-gray-400 text-sm">{song.album}</div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <Heart size={16} className="text-angola-red fill-current" />
                            <span className="text-sm font-mono w-10 text-right">{song.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}