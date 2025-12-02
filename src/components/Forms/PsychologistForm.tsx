import { useState } from 'react';
import { Brain, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function PsychologistForm() {
  // Auth removed: do not rely on logged-in user
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    specialization: '',
    experience_years: 0,
    license_number: '',
    about: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const application = { ...(formData as any), user_id: undefined };

      // Notify Telegram (best-effort). No DB persistence per request.
      const notifyUrl = (
        import.meta.env.VITE_NOTIFY_URL || 'http://localhost:4000'
      ).replace(/\/+$/, '');
      try {
        await fetch(`${notifyUrl}/notify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'psychologist', data: application }),
        });
      } catch (err) {
        console.warn('Telegram notify failed', err);
      }

      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        city: '',
        specialization: '',
        experience_years: 0,
        license_number: '',
        about: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value =
      target.type === 'number' ? parseInt(target.value) || 0 : target.value;
    setFormData((prev: any) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t.forms?.psychologistSuccess || 'Application Submitted!'}
        </h3>
        <p className="text-gray-700 mb-6">
          {t.forms?.psychologistSuccessMessage ||
            'Thank you for your interest! We will review your credentials and contact you soon.'}
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {t.forms?.submitAnother || 'Submit Another Application'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Brain className="w-8 h-8 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          {t.forms?.psychologistTitle || 'Psychologist Application'}
        </h2>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.fullName || 'Full Name'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={t.forms?.fullNamePlaceholder || 'Your full name'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.email || 'Email'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={
                t.forms?.emailPlaceholder ||
                t.auth?.emailPlaceholder ||
                'your@email.com'
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.phone || 'Phone'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={t.forms?.phonePlaceholder || '+7 (XXX) XXX-XX-XX'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.city || 'City'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={t.forms?.cityPlaceholder || 'Your city'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.specialization || 'Specialization'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder={
                t.forms?.specializationPlaceholder ||
                'e.g., Clinical Psychology'
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.experienceYears || 'Years of Experience'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="experience_years"
              value={formData.experience_years}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.licenseNumber || 'License Number'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="license_number"
            value={formData.license_number}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder={
              t.forms?.licenseNumberPlaceholder ||
              'Your professional license number'
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.about || 'About You'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder={
              t.forms?.aboutPlaceholder ||
              'Tell us about your experience, approach, and why you want to help...'
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? t.forms?.submitting || 'Submitting...'
            : t.forms?.submit || 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
