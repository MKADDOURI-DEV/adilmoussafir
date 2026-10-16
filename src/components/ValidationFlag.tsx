'use client';

import React from 'react';
import { useTranslation } from '@/context/LanguageContext';

export default function ValidationFlag({ className = '' }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full bg-warning/15 text-warning text-xs font-semibold ${className}`}
    >
      {t('common.toValidate')}
    </span>
  );
}