import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const content = {
    en: {
      title: 'We use cookies',
      message: 'We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.',
      accept: 'Accept',
      decline: 'Decline',
      learnMore: 'Learn more'
    },
    ru: {
      title: 'Мы используем файлы cookie',
      message: 'Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. Продолжая просмотр, вы соглашаетесь на использование файлов cookie.',
      accept: 'Принять',
      decline: 'Отклонить',
      learnMore: 'Подробнее'
    },
    kk: {
      title: 'Біз cookie файлдарын қолданамыз',
      message: 'Біз сайтымыздағы тәжірибеңізді жақсарту үшін cookie файлдарын қолданамыз. Қарауды жалғастыра отырып, сіз cookie файлдарын пайдалануға келісесіз.',
      accept: 'Қабылдау',
      decline: 'Қабылдамау',
      learnMore: 'Толығырақ'
    }
  };

  const text = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{text.title}</h3>
              <p className="text-sm text-gray-600">
                {text.message}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              {text.decline}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              {text.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
