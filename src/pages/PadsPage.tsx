import { Package, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function PadsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.getAccess.title}</h1>
          <p className="text-gray-600 text-lg">
            {t.getAccess.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 border-2 border-blue-200 rounded-lg p-8 text-center">
            <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t.getAccess.appInfo}
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              {t.getAccess.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                {t.getAccess.downloadButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
