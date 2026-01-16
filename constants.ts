import { Song, Artist, Genre, Playlist } from './types';

export const MOCK_ARTISTS: Artist[] = [
  { id: '1', name: 'Anselmo Ralph', image: 'https://picsum.photos/seed/anselmo/200/200', followers: '2.5M', genre: Genre.KIZOMBA },
  { id: '2', name: 'Matias Damásio', image: 'https://picsum.photos/seed/matias/200/200', followers: '1.8M', genre: Genre.SEMBA },
  { id: '3', name: 'Pérola', image: 'https://picsum.photos/seed/perola/200/200', followers: '1.2M', genre: Genre.KIZOMBA },
  { id: '4', name: 'Preto Show', image: 'https://picsum.photos/seed/preto/200/200', followers: '900K', genre: Genre.AFRO_HOUSE },
  { id: '5', name: 'Nagrelha (Eterno)', image: 'https://picsum.photos/seed/nagrelha/200/200', followers: '3M', genre: Genre.KUDURO },
];

export const MOCK_SONGS: Song[] = [
  { id: '101', title: 'Não Me Toca', artist: 'Anselmo Ralph', album: 'A Dor do Cupido', cover: 'https://picsum.photos/seed/cupido/300/300', duration: '3:45', genre: Genre.KIZOMBA, year: 2011 },
  { id: '102', title: 'Matemática do Amor', artist: 'Matias Damásio', album: 'Por Angola', cover: 'https://picsum.photos/seed/angola/300/300', duration: '4:10', genre: Genre.SEMBA, year: 2016 },
  { id: '103', title: 'Wamona', artist: 'Os Moikanos', album: 'Single', cover: 'https://picsum.photos/seed/kuduro/300/300', duration: '3:05', genre: Genre.KUDURO, year: 2022 },
  { id: '104', title: 'Diz a Ela', artist: 'Pérola', album: 'Mais Perto', cover: 'https://picsum.photos/seed/perola2/300/300', duration: '3:50', genre: Genre.KIZOMBA, year: 2018 },
  { id: '105', title: '150 BPM', artist: 'Preto Show', album: 'Banger', cover: 'https://picsum.photos/seed/150/300/300', duration: '2:55', genre: Genre.AFRO_HOUSE, year: 2023 },
  { id: '106', title: 'A Coisa Miqueira', artist: 'Os Lamas', album: 'Kuduro Puro', cover: 'https://picsum.photos/seed/lamas/300/300', duration: '3:30', genre: Genre.KUDURO, year: 2008 },
];

export const MOCK_PLAYLISTS: Playlist[] = [
  { id: 'p1', title: 'Top Kuduro 2025', description: 'Os beats mais quentes dos musseques.', cover: 'https://picsum.photos/seed/kuduroart/400/400', songs: [MOCK_SONGS[2], MOCK_SONGS[5]] },
  { id: 'p2', title: 'Semba da Terra', description: 'Tradição e cultura em cada nota.', cover: 'https://picsum.photos/seed/sembaart/400/400', songs: [MOCK_SONGS[1]] },
  { id: 'p3', title: 'Kizomba Romântica', description: 'Para dançar bem coladinho.', cover: 'https://picsum.photos/seed/kizombaart/400/400', songs: [MOCK_SONGS[0], MOCK_SONGS[3]] },
];

export const GENRE_COLORS: Record<string, string> = {
  [Genre.KUDURO]: 'from-angola-red to-orange-600',
  [Genre.SEMBA]: 'from-yellow-600 to-yellow-800',
  [Genre.KIZOMBA]: 'from-purple-600 to-pink-600',
  [Genre.AFRO_HOUSE]: 'from-blue-600 to-indigo-900',
  [Genre.RAP]: 'from-gray-700 to-black',
  [Genre.ZOUK]: 'from-pink-500 to-rose-500',
};