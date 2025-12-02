import { Heart, Building2, Copy, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function DonatePage() {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t.donate.title}
          </h1>
          <p className="text-lg text-gray-600">{t.donate.subtitle}</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <DollarSign className="w-10 h-10 text-pink-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            {t.donate.yourImpact}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-2xl font-bold text-pink-600 mb-2">
              {t.donate.impact.amount1}
            </p>
            <p className="text-gray-700">{t.donate.impact.desc1}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-2xl font-bold text-pink-600 mb-2">
              {t.donate.impact.amount2}
            </p>
            <p className="text-gray-700">{t.donate.impact.desc2}</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
        <div className="flex items-start space-x-3 mb-6">
          <Building2 className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-900">
            {t.donate.bankDetails.title}
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Foundation Name
            </label>
            <div className="bg-white rounded px-4 py-3">
              <span className="font-medium text-gray-900">
                {t.donate.bankDetails.name}
              </span>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              BIN
            </label>
            <div className="bg-white rounded px-4 py-3 flex items-center justify-between">
              <span className="font-mono font-medium text-gray-900">
                {t.donate.bankDetails.bin}
              </span>
              <button
                onClick={() => copyToClipboard(t.donate.bankDetails.bin, 'bin')}
                className="ml-2 p-2 hover:bg-gray-100 rounded transition-colors"
                title="Copy"
              >
                {copiedField === 'bin' ? (
                  <span className="text-green-600 font-bold">✓</span>
                ) : (
                  <Copy className="w-4 h-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              IBAN
            </label>
            <div className="bg-white rounded px-4 py-3 flex items-center justify-between">
              <span className="font-mono font-medium text-gray-900">
                {t.donate.bankDetails.iban}
              </span>
              <button
                onClick={() =>
                  copyToClipboard(t.donate.bankDetails.iban, 'iban')
                }
                className="ml-2 p-2 hover:bg-gray-100 rounded transition-colors"
                title="Copy"
              >
                {copiedField === 'iban' ? (
                  <span className="text-green-600 font-bold">✓</span>
                ) : (
                  <Copy className="w-4 h-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              BIC/SWIFT
            </label>
            <div className="bg-white rounded px-4 py-3 flex items-center justify-between">
              <span className="font-mono font-medium text-gray-900">
                {t.donate.bankDetails.bic}
              </span>
              <button
                onClick={() => copyToClipboard(t.donate.bankDetails.bic, 'bic')}
                className="ml-2 p-2 hover:bg-gray-100 rounded transition-colors"
                title="Copy"
              >
                {copiedField === 'bic' ? (
                  <span className="text-green-600 font-bold">✓</span>
                ) : (
                  <Copy className="w-4 h-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Currency
            </label>
            <div className="bg-white rounded px-4 py-3">
              <span className="font-medium text-gray-900">
                {t.donate.bankDetails.currency}
              </span>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Payment Purpose
            </label>
            <div className="bg-white rounded px-4 py-3">
              <span className="font-medium text-gray-900">
                {t.donate.bankDetails.purpose}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-lg p-8 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <p className="text-xl font-semibold">{t.donate.message}</p>
      </section>
    </div>
  );
}
