import { Heart, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">Umai Nury</span>
            </div>
            <p className="text-gray-400 text-sm">
              Supporting women across Central Asia
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  {t.footer.about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-involved')} className="hover:text-white transition-colors">
                  {t.footer.getInvolved}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('support')} className="hover:text-white transition-colors">
                  {t.footer.support}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partner')} className="hover:text-white transition-colors">
                  {t.footer.partner}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  {t.footer.terms}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:umainury@outlook.com" className="hover:text-white transition-colors">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/umainury_org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {t.footer.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
