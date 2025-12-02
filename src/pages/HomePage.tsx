import { Heart, Package, Users, ArrowRight, CheckCircle, Target, Brain, QrCode, FileText, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-200"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              {t.home.hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              {t.home.hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <button
              onClick={() => onNavigate('get-access')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.home.hero.getAccess}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-blue-600 hover:scale-105"
            >
              {t.home.hero.donate}
              <Heart className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5" />
                <span className="font-semibold">{t.home.mission.title}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.home.mission.problem}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.home.mission.problemText}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.home.mission.solution}
                </h3>
                <p className="text-gray-700">
                  {t.home.mission.solutionText}
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-200 transform hover:scale-105 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t.home.partner.title}
                  </h3>
                </div>
                <div className="flex justify-center mb-6">
                  <img
                    src="/blogo_en.png"
                    alt="Saby Charitable Foundation"
                    className="h-24 object-contain"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.home.partner.name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t.home.partner.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.home.howItWorks.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fade-in-up">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.home.howItWorks.psychSupport}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">{t.home.howItWorks.psychStep1}</p>
                <p className="leading-relaxed">
                  {t.home.howItWorks.psychStep2}{' '}
                  <a href="#eligibility" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                    {t.home.howItWorks.psychStep2Link}
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-fade-in-up animation-delay-100">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.home.howItWorks.menstrualProducts}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">{t.home.howItWorks.menstrualStep1}</p>
                <p className="leading-relaxed">
                  {t.home.howItWorks.menstrualStep2}{' '}
                  <a href="#eligibility" className="text-pink-600 hover:text-pink-700 font-semibold underline">
                    {t.home.howItWorks.menstrualStep2Link}
                  </a>
                </p>
                <p className="leading-relaxed flex items-center">
                  <QrCode className="w-5 h-5 mr-2 text-pink-600" />
                  {t.home.howItWorks.menstrualStep3}
                </p>
              </div>
            </div>
          </div>

          <div id="eligibility" className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg animate-fade-in-up animation-delay-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.home.eligibility.title}
              </h3>
              <p className="text-gray-600">{t.home.eligibility.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t.home.eligibility.category1}</span>
              </div>
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t.home.eligibility.category2}</span>
              </div>
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t.home.eligibility.category3}</span>
              </div>
              <div className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{t.home.eligibility.category4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.home.cta.title}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t.home.cta.subtitle}
            </p>
            <button
              onClick={() => onNavigate('donate')}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {t.home.cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
