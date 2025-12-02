import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { SupportPage } from './pages/SupportPage';
import { PartnerPage } from './pages/PartnerPage';
import { PadsPage } from './pages/PadsPage';
import { EventsPage } from './pages/EventsPage';
import { DonatePage } from './pages/DonatePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
// Sign-in / Sign-up removed

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isFading, setIsFading] = useState(false);

  const navigate = (page: string) => {
    if (page === currentPage) return;
    // fade out
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(page);
      // fade in
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div
          className={`transition-opacity duration-200 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {currentPage === 'home' && <HomePage onNavigate={navigate} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'get-involved' && <GetInvolvedPage />}
          {currentPage === 'support' && <SupportPage />}
          {currentPage === 'partner' && <PartnerPage />}
          {currentPage === 'get-access' && <PadsPage />}
          {currentPage === 'events' && <EventsPage />}
          {currentPage === 'donate' && <DonatePage />}
          {currentPage === 'privacy' && <PrivacyPage />}
          {currentPage === 'terms' && <TermsPage />}
        </div>
      </main>

      <Footer onNavigate={navigate} />
      <CookieConsent />
    </div>
  );
}

export default App;
