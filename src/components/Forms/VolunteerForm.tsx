import { useState } from 'react';
import { UserPlus, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function VolunteerForm() {
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
    motivation: '',
    availability: '',
    skills: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const application = { ...(formData as any), user_id: undefined };

      // Notify Telegram (best-effort). No DB persistence per request.
      try {
        await fetch('http://localhost:4000/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'volunteer', data: application }),
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
        motivation: '',
        availability: '',
        skills: '',
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
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t.forms?.volunteerSuccess || 'Application Submitted!'}
        </h3>
        <p className="text-gray-700 mb-6">
          {t.forms?.volunteerSuccessMessage ||
            'Thank you for your interest in volunteering! We will review your application and contact you soon.'}
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
        <UserPlus className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          {t.forms?.volunteerTitle || 'Volunteer Application'}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t.forms?.cityPlaceholder || 'Your city'}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.motivation || 'Why do you want to volunteer?'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={
              t.forms?.motivationPlaceholder ||
              'Tell us why you want to help...'
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.availability || 'Your Availability'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={
              t.forms?.availabilityPlaceholder ||
              'When are you available? (days, times)'
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.skills || 'Skills & Experience'}{' '}
            <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={
              t.forms?.skillsPlaceholder ||
              'Any relevant skills or experience...'
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? t.forms?.submitting || 'Submitting...'
            : t.forms?.submit || 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
