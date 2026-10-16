'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';

export default function RestaurantPreviewSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background pt-16 pb-16">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        <Reveal className="lg:col-span-7">
          <PhotoPlaceholder label="Restaurant — à fournir" className="h-72 sm:h-[26rem] rounded-3xl" />
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5 lg:-ms-16 relative z-10 mt-[-3rem] lg:mt-0">
          <div className="bg-primary text-primary-foreground rounded-3xl p-7 sm:p-10 space-y-5 mx-4 lg:mx-0 shadow-2xl">
            <ValidationFlag />
            <h2 className="font-display text-display-lg">{t('resto.title')}</h2>
            <p className="text-base leading-relaxed opacity-85">{t('resto.intro')}</p>
            <Link
              href="/restaurant-caf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
            >
              {t('common.learnMore')}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}