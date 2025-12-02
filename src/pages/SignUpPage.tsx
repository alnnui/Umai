import { useState } from 'react';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export function SignUpPage({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const { signUp } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!fullName.trim()) {
      setError(t.signup?.enterFullName || 'Please enter your full name');
      return;
    }
    setLoading(true);
    try {
      const { error } = await signUp(email, password, fullName);
      if (error) throw error;
      onNavigate?.('home');
    } catch (err: any) {
      setError(err.message || t.signup?.error || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {t.signup?.title || 'Sign Up'}
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.signup?.fullName || 'Full Name'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={
                t.signup?.fullNamePlaceholder || 'Enter your full name'
              }
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.signup?.email || 'Email'}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t.signup?.emailPlaceholder || 'your@email.com'}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.signup?.password || 'Password'}
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t.signup?.passwordPlaceholder || '••••••••'}
              required
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? t.signup?.loading || 'Loading...'
            : t.signup?.submit || 'Sign Up'}
        </button>

        <div className="text-center text-sm mt-4">
          <p className="text-gray-600 mb-2">
            {t.signup?.haveAccount || 'Already have an account?'}
          </p>
          <button
            type="button"
            onClick={() => onNavigate?.('signin')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {t.signup?.signIn || 'Sign in'}
          </button>
        </div>
      </form>
    </main>
  );
}
