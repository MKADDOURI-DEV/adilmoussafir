'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';

export default function RestaurantIntroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background pt-14 pb-14">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-5">
          <h1 className="font-display text-display-lg text-foreground">{t('resto.title')}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed flex flex-wrap items-center gap-3">
            {t('resto.intro')} <ValidationFlag />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Reveal className="md:col-span-7">
            <PhotoPlaceholder label="Salle du restaurant — à fournir" className="h-72 md:h-[26rem] rounded-3xl" />
          </Reveal>
          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            <Reveal delay={100}>
              <PhotoPlaceholder label="Café — à fournir" className="h-48 md:h-full rounded-3xl" />
            </Reveal>
            <Reveal delay={200}>
              <PhotoPlaceholder label="Terrasse — à fournir" className="h-48 md:h-full rounded-3xl" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}