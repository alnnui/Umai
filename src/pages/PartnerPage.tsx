import { Handshake, TrendingDown, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PartnerForm } from '../components/Forms/PartnerForm';

export function PartnerPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Handshake className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">{t.partner.title}</h1>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.partner.forBusiness}</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <TrendingDown className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-700 leading-relaxed">{t.partner.intro}</p>
          </div>
          <div className="flex items-start space-x-4">
            <Heart className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-700 leading-relaxed">{t.partner.impact}</p>
          </div>
        </div>
      </section>

      <PartnerForm />
    </div>
  );
}
