'use client';

import React from 'react';
import { useTranslation } from '@/context/LanguageContext';
import { bookingConfig } from '@/config/site';

// Isolated booking-engine module surface.
// When a provider is confirmed, branch on bookingConfig.provider:
//  - 'external-link': redirect to bookingConfig.externalUrl
//  - 'widget': load the vendor's official widget script
//  - 'api': call a server-side route handler (credentials stay in server env vars)
// Until then, nothing here simulates availability.

export default function BookingEngineStatus() {
  const { t } = useTranslation();
  const configured = bookingConfig?.provider !== 'unconfigured';

  return (
    <div
      className={`rounded-2xl p-5 border ${
        configured ? 'bg-success/10 border-success/30' : 'bg-warning/10 border-warning/30'
      }`}
      role="status"
    >
      <p className={`text-xs font-semibold uppercase tracking-wider ${configured ? 'text-success' : 'text-warning'}`}>
        {t('booking.statusTitle')} · {bookingConfig?.provider}
      </p>
      <p className="mt-2 text-sm text-foreground leading-relaxed">{t('booking.statusText')}</p>
    </div>
  );
}