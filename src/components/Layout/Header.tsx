import { useLanguage } from '../../contexts/LanguageContext';
import { Heart, Globe, Menu } from 'lucide-react';
import { Language } from '../../lib/translations';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'get-involved', label: t.nav.getInvolved },
    { key: 'events', label: t.nav.events },
    { key: 'get-access', label: t.nav.getAccess },
    { key: 'donate', label: t.nav.donate },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Heart className="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform" />
            <h1 className="text-xl font-bold text-gray-900">Umai Nury</h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-xs font-medium transition-all whitespace-nowrap px-2 ${
                  currentPage === item.key
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-blue-600 pb-1'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors px-2">
                <Globe className="w-4 h-4" />
                <span className="uppercase hidden sm:inline">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => setLanguage('en' as Language)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ru' as Language)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Русский
                </button>
                <button
                  onClick={() => setLanguage('kk' as Language)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Қазақша
                </button>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded transition-all ${
                  currentPage === item.key
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Auth removed: no sign-in / sign-up links */}
          </nav>
        )}
      </div>
    </header>
  );
}
