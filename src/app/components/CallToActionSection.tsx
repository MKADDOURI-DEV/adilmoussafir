'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function CallToActionSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background pt-16 pb-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent text-accent-foreground p-8 sm:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="absolute -bottom-24 -end-16 size-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
            <div className="relative space-y-3 max-w-xl">
              <h2 className="font-display text-display-lg">{t('cta.title')}</h2>
              <p className="text-base opacity-90">{t('cta.text')}</p>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig?.phoneHref}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors tap-target"
              >
                {siteConfig?.phone}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-accent-foreground/60 font-semibold hover:bg-accent-foreground hover:text-accent transition-colors tap-target"
              >
                {t('common.reserve')}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}