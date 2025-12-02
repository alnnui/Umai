import { UserPlus, Brain, Building2, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { VolunteerForm } from '../components/Forms/VolunteerForm';
import { PsychologistForm } from '../components/Forms/PsychologistForm';
import { ChapterForm } from '../components/Forms/ChapterForm';
import { PartnerForm } from '../components/Forms/PartnerForm';
import { useState } from 'react';

export function GetInvolvedPage() {
  const { t } = useLanguage();
  const [activeForm, setActiveForm] = useState<
    'volunteer' | 'psychologist' | 'chapter' | 'partner' | null
  >(null);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t.getInvolved.title}
        </h1>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <UserPlus className="w-10 h-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t.getInvolved.volunteer.title}
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          {t.getInvolved.volunteer.intro}
        </p>
        <div className="bg-white p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">
            {t.getInvolved.volunteer.whatYouCanDo}
          </h3>
          <ul className="space-y-2">
            {t.getInvolved.volunteer.duties.map(
              (duty: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{duty}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-4">
            {t.getInvolved.volunteer.howTo.title}
          </h3>
          <p className="mb-6">{t.getInvolved.volunteer.howTo.description}</p>
          <button
            onClick={() => setActiveForm('volunteer')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            {t.getInvolved.volunteer.howTo.button}
          </button>
        </div>
      </section>

      {activeForm === 'volunteer' && (
        <section className="animate-fade-in-up">
          <VolunteerForm />
        </section>
      )}

      <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Brain className="w-10 h-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t.getInvolved.psychologist.title}
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          {t.getInvolved.psychologist.intro}
        </p>
        <div className="bg-white p-6 rounded-lg mb-4">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">
            {t.getInvolved.psychologist.opportunitiesLabel}
          </h3>
          <ul className="space-y-2">
            {t.getInvolved.psychologist.opportunities.map(
              (opp: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-gray-700">{opp}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <p className="text-gray-600 italic mb-6">
          {t.getInvolved.psychologist.note}
        </p>
        <button
          onClick={() => setActiveForm('psychologist')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
        >
          {t.getInvolved.psychologist.applyButton}
        </button>
      </section>

      {activeForm === 'psychologist' && (
        <section className="animate-fade-in-up">
          <PsychologistForm />
        </section>
      )}

      <section className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building2 className="w-10 h-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t.getInvolved.chapter.title}
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              {t.getInvolved.chapter.whatIsChapter}
            </h3>
            <p className="text-gray-700">{t.getInvolved.chapter.what}</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2 text-xl">
              {t.getInvolved.chapter.chaptersVsProjects}
            </h3>
            <p className="text-gray-700">{t.getInvolved.chapter.vs}</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 text-xl">
              {t.getInvolved.chapter.whyStartChapter}
            </h3>
            <ul className="space-y-2">
              {t.getInvolved.chapter.why.map(
                (reason: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-4">
              {t.getInvolved.chapter.howTo.title}
            </h3>
            <p className="mb-6">{t.getInvolved.chapter.readyToStart}</p>
            <button
              onClick={() => setActiveForm('chapter')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {t.getInvolved.chapter.startButton}
            </button>
          </div>
        </div>
      </section>

      {activeForm === 'chapter' && (
        <section className="animate-fade-in-up">
          <ChapterForm />
        </section>
      )}

      <section className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Handshake className="w-10 h-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {t.partner?.title || 'Partner with Us'}
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          {t.partner?.partnerIntro ||
            'Join us as a corporate partner to make a real difference in the lives of women and girls.'}
        </p>
        <div className="bg-white p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            {t.partner?.partnerHelps ||
              'Your partnership helps us provide essential hygiene products and support to those in need.'}
          </p>
        </div>
        <button
          onClick={() => setActiveForm('partner')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          {t.partner?.becomeButton || 'Become a Partner'}
        </button>
      </section>

      {activeForm === 'partner' && (
        <section className="animate-fade-in-up">
          <PartnerForm />
        </section>
      )}
    </div>
  );
}
