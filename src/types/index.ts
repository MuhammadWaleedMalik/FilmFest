export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'organizer';
  avatar?: string;
  createdAt: Date;
}

export interface Festival {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  startDate: Date;
  endDate: Date;
  submissionDeadline: Date;
  location: string;
  category: FestivalCategory;
  entryFee: number;
  currency: string;
  website: string;
  contactEmail: string;
  rules: string[];
  acceptedFormats: string[];
  awards: string[];
  featured: boolean;
  status: 'upcoming' | 'open' | 'closed' | 'completed';
}

export interface FestivalCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Submission {
  id: string;
  userId: string;
  festivalId: string;
  filmTitle: string;
  filmDescription: string;
  director: string;
  genre: string;
  duration: number;
  releaseYear: number;
  submissionDate: Date;
  status: 'submitted' | 'under-review' | 'accepted' | 'rejected';
  fileUrl: string;
  posterUrl?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  image: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
  languages: Language[];
}