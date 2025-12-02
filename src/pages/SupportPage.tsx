import { Palette, Home, Briefcase, Activity, GraduationCap, Users as UsersIcon, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SupportPage() {
  const { t } = useLanguage();

  const categories = [
    { icon: Palette, title: t.support.creative.title, ideas: t.support.creative.ideas, color: 'purple' },
    { icon: Home, title: t.support.host.title, ideas: t.support.host.ideas, color: 'pink' },
    { icon: Briefcase, title: t.support.entrepreneur.title, ideas: t.support.entrepreneur.ideas, color: 'blue' },
    { icon: Activity, title: t.support.active.title, ideas: t.support.active.ideas, color: 'green' },
    { icon: GraduationCap, title: t.support.student.title, ideas: t.support.student.ideas, color: 'yellow' },
    { icon: UsersIcon, title: t.support.community.title, ideas: t.support.community.ideas, color: 'red' },
  ];

  const colorClasses: Record<string, { bg: string; text: string; icon: string }> = {
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', icon: 'text-purple-600' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-700', icon: 'text-pink-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-700', icon: 'text-green-600' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', icon: 'text-yellow-600' },
    red: { bg: 'bg-red-50', text: 'text-red-700', icon: 'text-red-600' },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.support.title}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{t.support.subtitle}</h2>
        <p className="text-lg text-gray-600">{t.support.intro}</p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map(({ icon: Icon, title, ideas, color }, index) => (
          <div key={index} className={`${colorClasses[color].bg} rounded-lg shadow-lg p-6`}>
            <div className="flex items-center mb-4">
              <Icon className={`w-8 h-8 ${colorClasses[color].icon} mr-3`} />
              <h3 className={`text-xl font-bold ${colorClasses[color].text}`}>{title}</h3>
            </div>
            <ul className="space-y-2">
              {ideas.map((idea: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className={`${colorClasses[color].text} mr-2`}>•</span>
                  <span className="text-gray-700">{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-xl font-semibold mb-4">{t.support.impact}</p>
        <p className="text-lg mb-6">{t.support.contact}</p>
        <a
          href="mailto:umainury@outlook.com"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          <Mail className="w-5 h-5 mr-2" />
          umainury@outlook.com
        </a>
      </section>
    </div>
  );
}
