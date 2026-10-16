'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const { t } = useTranslation();
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <AppLogo size={44} />
              <span className="font-display text-2xl">{siteConfig?.name}</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">{siteConfig?.address}</p>
            <a
              href={siteConfig?.phoneHref}
              className="inline-flex items-center text-base font-semibold hover:text-accent transition-colors tap-target"
            >
              {siteConfig?.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8 text-base font-medium">
            <div className="flex flex-col gap-1">
              <Link href="/" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('nav.home')}</Link>
              <Link href="/rooms-suites" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('nav.rooms')}</Link>
              <Link href="/restaurant-caf" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('nav.restaurant')}</Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/booking" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('nav.booking')}</Link>
              <Link href="/contact" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('nav.contact')}</Link>
              <a href={siteConfig?.mapsLink} target="_blank" rel="noopener noreferrer" className="py-2 opacity-80 hover:opacity-100 hover:text-accent transition-colors">{t('common.route')}</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm opacity-80">
          <p>© {year} {siteConfig?.name}. {t('footer.rights')}.</p>
          <p className="flex gap-5">
            <Link href="/contact" className="hover:text-accent transition-colors py-2">{t('footer.legal')}</Link>
            <Link href="/contact" className="hover:text-accent transition-colors py-2">{t('footer.privacy')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}