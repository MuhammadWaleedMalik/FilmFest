import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, LanguageContextType } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.festivals': 'Festivals',
    'nav.submit': 'Submit Film',
    'nav.news': 'News',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.dashboard': 'Dashboard',
    'nav.logout': 'Logout',
    'hero.title': 'Discover Amazing Film Festivals',
    'hero.subtitle': 'Connect with film festivals worldwide and showcase your creativity',
    'hero.cta': 'Start Exploring',
    'featured.title': 'Featured Festivals',
    'categories.title': 'Festival Categories',
    'footer.about': 'About Us',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
  },
  zh: {
    'nav.home': '首页',
    'nav.explore': '探索',
    'nav.festivals': '电影节',
    'nav.submit': '提交影片',
    'nav.news': '新闻',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.login': '登录',
    'nav.register': '注册',
    'nav.dashboard': '仪表板',
    'nav.logout': '退出',
    'hero.title': '发现精彩电影节',
    'hero.subtitle': '与全球电影节建立联系，展示您的创意',
    'hero.cta': '开始探索',
    'featured.title': '精选电影节',
    'categories.title': '电影节类别',
    'footer.about': '关于我们',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.cookies': 'Cookie政策',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.explore': '探索',
    'nav.festivals': '映画祭',
    'nav.submit': '映画を投稿',
    'nav.news': 'ニュース',
    'nav.about': '私たちについて',
    'nav.contact': 'お問い合わせ',
    'nav.login': 'ログイン',
    'nav.register': '登録',
    'nav.dashboard': 'ダッシュボード',
    'nav.logout': 'ログアウト',
    'hero.title': '素晴らしい映画祭を発見',
    'hero.subtitle': '世界中の映画祭とつながり、あなたの創造性を披露してください',
    'hero.cta': '探索を開始',
    'featured.title': '注目の映画祭',
    'categories.title': '映画祭カテゴリー',
    'footer.about': '私たちについて',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.cookies': 'クッキーポリシー',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.explore': 'Explorar',
    'nav.festivals': 'Festivales',
    'nav.submit': 'Enviar Película',
    'nav.news': 'Noticias',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.register': 'Registrarse',
    'nav.dashboard': 'Panel',
    'nav.logout': 'Cerrar Sesión',
    'hero.title': 'Descubre Festivales de Cine Increíbles',
    'hero.subtitle': 'Conéctate con festivales de cine mundiales y muestra tu creatividad',
    'hero.cta': 'Comenzar a Explorar',
    'featured.title': 'Festivales Destacados',
    'categories.title': 'Categorías de Festivales',
    'footer.about': 'Acerca de Nosotros',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookies': 'Política de Cookies',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.explore': 'Explorer',
    'nav.festivals': 'Festivals',
    'nav.submit': 'Soumettre un Film',
    'nav.news': 'Actualités',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.register': "S'inscrire",
    'nav.dashboard': 'Tableau de Bord',
    'nav.logout': 'Déconnexion',
    'hero.title': 'Découvrez des Festivals de Cinéma Incroyables',
    'hero.subtitle': 'Connectez-vous avec des festivals de cinéma mondiaux et montrez votre créativité',
    'hero.cta': 'Commencer à Explorer',
    'featured.title': 'Festivals Vedettes',
    'categories.title': 'Catégories de Festivals',
    'footer.about': 'À Propos de Nous',
    'footer.terms': 'Conditions de Service',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.cookies': 'Politique des Cookies',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
    localStorage.setItem('selectedLanguage', code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    languages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};