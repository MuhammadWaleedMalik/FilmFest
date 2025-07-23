import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Film, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Youtube,
  Globe, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, languages, currentLanguage, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <footer className="bg-[#0C2D36] text-white text-sm border-t border-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-gray-300 mb-4">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/how-it-goes" className="hover:text-white">How it Goes?</Link>
          <Link to="/influencers" className="hover:text-white">Influencers</Link>
          <Link to="/blogs" className="hover:text-white">Blogs</Link>
          <Link to="/stories" className="hover:text-white">Stories</Link>
          <Link to="/lists" className="hover:text-white">Lists</Link>
          <Link to="/news" className="hover:text-white">News</Link>
          <Link to="/faqs" className="hover:text-white">FAQs</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 border-t border-gray-600 pt-4">
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/logos" className="hover:text-white">Logos</Link>

          {/* Language Selector */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 hover:text-white transition"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang?.flag}</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10"
                >
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t last:rounded-b flex items-center"
                    >
                      <span className="mr-2">{lang.flag}</span> {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-700 pt-4">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-white" />
            <span className="font-semibold text-white">WFCN</span>
            <span className="text-gray-400 text-sm">© 2025</span>
          </div>

          <div className="flex space-x-4">
            <a href="mailto:pythoncoderexpert@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
            <a href="mailto:pythonatewaleed@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:+923444675899" className="text-gray-400 hover:text-white">
              <Phone className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/atlasnexuscorps_/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@AtlasNexusCorps" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
