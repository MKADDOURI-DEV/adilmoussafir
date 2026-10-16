'use client';

import React from 'react';
import { useTranslation } from '@/context/LanguageContext';

type Props = {
  label: string;
  className?: string;
};

export default function PhotoPlaceholder({ label, className = '' }: Props) {
  const { t } = useTranslation();
  return (
    <div
      className={`photo-placeholder relative flex items-end overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
      <div className="relative p-4 w-full">
        <span className="inline-block px-2.5 py-1 rounded-full bg-warning text-warning-foreground text-xs font-semibold">
          {t('common.photoTemp')}
        </span>
        <p className="mt-2 text-sm font-medium text-background">{label}</p>
      </div>
    </div>
  );
}