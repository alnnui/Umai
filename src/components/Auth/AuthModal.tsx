import { useState, useEffect } from 'react';
import { X, Mail, Lock, User, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultMode = 'signin' }: AuthModalProps) {
  const { signIn, signUp, resetPassword } = useAuth();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      const header = document.querySelector('header');
      if (header) {
        header.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      const header = document.querySelector('header');
      if (header) {
        header.style.paddingRight = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      const header = document.querySelector('header');
      if (header) {
        header.style.paddingRight = '';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password);
        if (error) throw error;
        onClose();
      } else if (mode === 'signup') {
        if (!fullName.trim()) {
          throw new Error('Please enter your full name');
        }
        const { error } = await signUp(email, password, fullName);
        if (error) throw error;
        setSuccess('Account created successfully! Please check your email to verify.');
        setTimeout(() => onClose(), 3000);
      } else if (mode === 'reset') {
        const { error } = await resetPassword(email);
        if (error) throw error;
        setSuccess('Password reset email sent! Please check your inbox.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative my-8 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {mode === 'signin' && t.auth?.signIn || 'Sign In'}
          {mode === 'signup' && t.auth?.signUp || 'Sign Up'}
          {mode === 'reset' && t.auth?.resetPassword || 'Reset Password'}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.auth?.fullName || 'Full Name'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.auth?.fullNamePlaceholder || 'Enter your full name'}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.auth?.email || 'Email'}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t.auth?.emailPlaceholder || 'your@email.com'}
                required
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.auth?.password || 'Password'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t.auth?.loading || 'Loading...' : (
              <>
                {mode === 'signin' && (t.auth?.signIn || 'Sign In')}
                {mode === 'signup' && (t.auth?.signUp || 'Sign Up')}
                {mode === 'reset' && (t.auth?.sendResetLink || 'Send Reset Link')}
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {mode === 'signin' && (
            <>
              <button
                onClick={() => setMode('reset')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.auth?.forgotPassword || 'Forgot password?'}
              </button>
              <p className="mt-2 text-gray-600">
                {t.auth?.noAccount || "Don't have an account?"}{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t.auth?.signUp || 'Sign up'}
                </button>
              </p>
            </>
          )}
          {mode === 'signup' && (
            <p className="text-gray-600">
              {t.auth?.haveAccount || 'Already have an account?'}{' '}
              <button
                onClick={() => setMode('signin')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.auth?.signIn || 'Sign in'}
              </button>
            </p>
          )}
          {mode === 'reset' && (
            <button
              onClick={() => setMode('signin')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {t.auth?.backToSignIn || 'Back to sign in'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
