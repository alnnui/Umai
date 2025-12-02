import { Users, Target, Smartphone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.about.intro}
        </p>
      </section>

      <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Target className="w-10 h-10 text-red-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">{t.about.whyWeExist.title}</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-lg">{t.about.whyWeExist.text1}</p>
          <p className="text-lg">{t.about.whyWeExist.text2}</p>
          <p className="text-lg font-semibold text-red-700">{t.about.whyWeExist.text3}</p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Users className="w-10 h-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">{t.about.team.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">{t.about.team.founder}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">{t.about.team.cofounder}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">{t.about.team.digital}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">{t.about.team.tech}</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.about.work.title}</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-center mb-3">
              <Smartphone className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.work.app.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.about.work.app.description}</p>
          </div>

          <div className="border-l-4 border-pink-600 pl-6">
            <div className="flex items-center mb-3">
              <MessageCircle className="w-6 h-6 text-pink-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.work.talks.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.about.work.talks.description}</p>
          </div>

          <div className="border-l-4 border-green-600 pl-6">
            <div className="flex items-center mb-3">
              <MapPin className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.work.outreach.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.about.work.outreach.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
