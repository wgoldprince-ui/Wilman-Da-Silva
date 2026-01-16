export interface Artist {
  id: string;
  name: string;
  image: string;
  followers: string;
  genre: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string; // display string e.g. "3:45"
  genre: string;
  year: number;
  audioUrl?: string; // Placeholder for real audio
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  songs: Song[];
}

export enum Genre {
  KUDURO = 'Kuduro',
  SEMBA = 'Semba',
  KIZOMBA = 'Kizomba',
  AFRO_HOUSE = 'Afro House',
  RAP = 'Rap Angolano',
  ZOUK = 'Zouk'
}

export interface User {
  name: string;
  image: string;
  plan: 'Free' | 'Premium';
}