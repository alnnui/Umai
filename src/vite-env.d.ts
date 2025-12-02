/// <reference types="vite/client" />

interface CloudPaymentsWidget {
  pay(
    type: 'charge' | 'auth',
    data: {
      publicId: string;
      description: string;
      amount: number;
      currency: string;
      accountId?: string;
      invoiceId?: string;
      email?: string;
      skin?: string;
      data?: Record<string, string | number>;
    },
    options?: {
      onSuccess?: (options: any) => void;
      onFail?: (reason: string, options: any) => void;
      onComplete?: (paymentResult: boolean, options: any) => void;
    }
  ): void;
}

interface Window {
  cp: {
    CloudPayments: new () => CloudPaymentsWidget;
  };
}
