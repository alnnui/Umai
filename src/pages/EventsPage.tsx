import { Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function EventsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t.events.title}
          </h1>
          <p className="text-gray-600 text-lg">{t.events.subtitle}</p>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {t.events.noEvents}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
