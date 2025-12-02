import { useState } from 'react';
import { Handshake, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function PartnerForm() {
  // Auth removed: do not rely on logged-in user
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    company_type: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const inquiry = { ...(formData as any), user_id: undefined };

      // Notify Telegram (best-effort). No DB persistence per request.
      const endpoint = '/.netlify/functions/notify';
      try {
        console.debug('Notify endpoint (partner):', endpoint);
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'partner', data: inquiry }),
        });
      } catch (err) {
        console.warn('Telegram notify failed', err);
      }

      setSuccess(true);
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        company_type: '',
        message: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
          {t.forms?.partnerSuccess || 'Inquiry Submitted!'}
        </h3>
        <p className="text-gray-700 mb-6">
          {t.forms?.partnerSuccessMessage ||
            'Thank you for your interest in partnering with us! We will contact you soon to discuss opportunities.'}
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {t.forms?.submitAnother || 'Submit Another Inquiry'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Handshake className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          {t.forms?.partnerTitle || 'Partnership Inquiry'}
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
              {t.forms?.companyName || 'Company Name'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={
                t.forms?.companyNamePlaceholder || 'Your company name'
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.forms?.contactName || 'Contact Person'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t.forms?.contactNamePlaceholder || 'Your full name'}
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
                'your@company.com'
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.companyType || 'Company Type'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="company_type"
            value={formData.company_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">
              {t.forms?.selectCompanyType || 'Select company type'}
            </option>
            <option value="corporate">
              {t.forms?.corporate || 'Corporate/Large Business'}
            </option>
            <option value="small_business">
              {t.forms?.smallBusiness || 'Small Business'}
            </option>
            <option value="ngo">{t.forms?.ngo || 'NGO/Non-Profit'}</option>
            <option value="government">
              {t.forms?.government || 'Government Organization'}
            </option>
            <option value="educational">
              {t.forms?.educational || 'Educational Institution'}
            </option>
            <option value="other">{t.forms?.other || 'Other'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.forms?.message || 'Message'}{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={
              t.forms?.messagePlaceholder ||
              'Tell us about your organization and how you would like to partner with us...'
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
            : t.forms?.submit || 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}
