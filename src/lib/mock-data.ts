export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  accuracy: number;
  verified: boolean;
  specialties: string[];
  bio: string;
}

export interface Story {
  id: string;
  creator: Creator;
  type: 'text' | 'chart' | 'video';
  content: string;
  timestamp: Date;
  seen: boolean;
}

export interface Signal {
  id: string;
  creator: Creator;
  type: 'BUY' | 'SELL';
  instrument: string;
  entry: number;
  stopLoss: number;
  targets: number[];
  timeframe: string;
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
  timestamp: Date;
  likes: number;
  comments: number;
  saves: number;
  accuracy?: number;
}

export interface Post {
  id: string;
  creator: Creator;
  content: string;
  image?: string;
  category: string;
  timestamp: Date;
  likes: number;
  comments: number;
  saves: number;
}

export interface Video {
  id: string;
  creator: Creator;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  category: string;
  timestamp: Date;
}

export const creators: Creator[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    handle: '@rajesh_scalps',
    avatar: '',
    followers: 45200,
    accuracy: 78,
    verified: true,
    specialties: ['Scalping', 'Options'],
    bio: 'Full-time scalper | 8 years in markets | BANKNIFTY specialist',
  },
  {
    id: '2',
    name: 'Priya Nair',
    handle: '@priya_charts',
    avatar: '',
    followers: 32100,
    accuracy: 82,
    verified: true,
    specialties: ['Intraday', 'Technical Analysis'],
    bio: 'CMT Level 3 | Price action trader | Clean chart setups',
  },
  {
    id: '3',
    name: 'Vikram Desai',
    handle: '@vikram_options',
    avatar: '',
    followers: 28400,
    accuracy: 71,
    verified: false,
    specialties: ['Options', 'Market Psychology'],
    bio: 'Options strategist | Theta gang | Risk management first',
  },
  {
    id: '4',
    name: 'Anita Gupta',
    handle: '@anita_momentum',
    avatar: '',
    followers: 19800,
    accuracy: 85,
    verified: true,
    specialties: ['Scalping', 'Live Commentary'],
    bio: 'Momentum trader | Live market streams | Beginner-friendly',
  },
  {
    id: '5',
    name: 'Arjun Patel',
    handle: '@arjun_swings',
    avatar: '',
    followers: 52300,
    accuracy: 74,
    verified: true,
    specialties: ['Intraday', 'Options'],
    bio: 'Swing to intraday | NIFTY options | Building wealth steadily',
  },
  {
    id: '6',
    name: 'Meera Iyer',
    handle: '@meera_levels',
    avatar: '',
    followers: 15600,
    accuracy: 88,
    verified: false,
    specialties: ['Technical Analysis', 'Market Psychology'],
    bio: 'Support/resistance queen | Data-driven analysis',
  },
];

export const stories: Story[] = [
  { id: '1', creator: creators[0], type: 'text', content: 'BANKNIFTY CE 48000 looking strong 🚀', timestamp: new Date(Date.now() - 1800000), seen: false },
  { id: '2', creator: creators[1], type: 'chart', content: 'NIFTY forming a beautiful ascending triangle', timestamp: new Date(Date.now() - 3600000), seen: false },
  { id: '3', creator: creators[2], type: 'text', content: 'Market turning weak — bearish engulfing on 15min', timestamp: new Date(Date.now() - 5400000), seen: true },
  { id: '4', creator: creators[3], type: 'text', content: 'SL hit on RELIANCE. Moving on. Risk managed. ✅', timestamp: new Date(Date.now() - 7200000), seen: false },
  { id: '5', creator: creators[4], type: 'chart', content: 'HDFC Bank breakout above 1680 resistance', timestamp: new Date(Date.now() - 9000000), seen: true },
  { id: '6', creator: creators[5], type: 'text', content: 'Target 1 booked on INFY! 🎯 +2.5%', timestamp: new Date(Date.now() - 10800000), seen: false },
];

export const signals: Signal[] = [
  {
    id: '1',
    creator: creators[0],
    type: 'BUY',
    instrument: 'BANKNIFTY 48000 CE',
    entry: 245,
    stopLoss: 210,
    targets: [280, 320, 360],
    timeframe: '15min',
    risk: 'MEDIUM',
    timestamp: new Date(Date.now() - 900000),
    likes: 234,
    comments: 45,
    saves: 89,
    accuracy: 78,
  },
  {
    id: '2',
    creator: creators[1],
    type: 'SELL',
    instrument: 'NIFTY 23500 PE',
    entry: 180,
    stopLoss: 210,
    targets: [150, 120, 95],
    timeframe: '5min',
    risk: 'HIGH',
    timestamp: new Date(Date.now() - 2700000),
    likes: 156,
    comments: 32,
    saves: 67,
    accuracy: 82,
  },
  {
    id: '3',
    creator: creators[4],
    type: 'BUY',
    instrument: 'RELIANCE 2900 CE',
    entry: 52,
    stopLoss: 40,
    targets: [65, 78, 90],
    timeframe: '30min',
    risk: 'LOW',
    timestamp: new Date(Date.now() - 5400000),
    likes: 312,
    comments: 67,
    saves: 145,
    accuracy: 74,
  },
];

export const posts: Post[] = [
  {
    id: '1',
    creator: creators[1],
    content: 'NIFTY is approaching a critical resistance zone at 23,800. Watch for rejection patterns on the 15-minute chart. If we get a strong bearish candle here, shorting with SL above 23,850 could be a clean trade.',
    category: 'Technical Analysis',
    timestamp: new Date(Date.now() - 1200000),
    likes: 189,
    comments: 34,
    saves: 78,
  },
  {
    id: '2',
    creator: creators[2],
    content: 'Psychology tip: If you\'re revenge trading after a loss, close your terminal and walk away. The market will be there tomorrow. Your capital might not be if you keep forcing trades. 🧠',
    category: 'Market Psychology',
    timestamp: new Date(Date.now() - 3600000),
    likes: 456,
    comments: 89,
    saves: 234,
  },
  {
    id: '3',
    creator: creators[5],
    content: 'Key levels for tomorrow:\n• NIFTY: Support 23,400 | Resistance 23,800\n• BANKNIFTY: Support 47,800 | Resistance 48,500\n• Watch for gap up/down opening and first 15-min candle close.',
    category: 'Intraday',
    timestamp: new Date(Date.now() - 7200000),
    likes: 567,
    comments: 123,
    saves: 345,
  },
];

export const videos: Video[] = [
  {
    id: '1',
    creator: creators[0],
    title: 'How I Scalp BANKNIFTY Options — Live Trade Breakdown',
    thumbnail: '',
    duration: '18:24',
    views: 45600,
    category: 'Scalping',
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: '2',
    creator: creators[1],
    title: 'Price Action Masterclass: Reading Candlestick Patterns',
    thumbnail: '',
    duration: '32:15',
    views: 78900,
    category: 'Technical Analysis',
    timestamp: new Date(Date.now() - 172800000),
  },
  {
    id: '3',
    creator: creators[3],
    title: 'Why 90% of Traders Lose Money — The Truth Nobody Tells You',
    thumbnail: '',
    duration: '24:08',
    views: 124000,
    category: 'Market Psychology',
    timestamp: new Date(Date.now() - 259200000),
  },
  {
    id: '4',
    creator: creators[4],
    title: 'Options Greeks Explained Simply — Delta, Theta, Gamma',
    thumbnail: '',
    duration: '28:42',
    views: 56700,
    category: 'Options',
    timestamp: new Date(Date.now() - 345600000),
  },
];

export const categories = [
  'All',
  'Scalping',
  'Intraday',
  'Options',
  'Market Psychology',
  'Technical Analysis',
  'Live Commentary',
];

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
