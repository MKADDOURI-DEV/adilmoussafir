'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background pt-16 pb-16 md:pt-20 md:pb-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-stretch">
        <div className="space-y-8 flex flex-col justify-between">
          <Reveal>
            <h2 className="font-display text-display-lg text-foreground">{t('about.title')}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t('about.p1')}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl flex flex-wrap items-center gap-3">
              {t('about.p2')} <ValidationFlag />
            </p>
          </Reveal>
          <Reveal delay={300}>
            <PhotoPlaceholder label="Façade de l’hôtel — à fournir" className="h-64 sm:h-80 rounded-t-[10rem] rounded-b-2xl" />
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:sticky lg:top-28 self-start">
          <aside className="rounded-3xl bg-secondary border border-border p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('about.factAddress')}</p>
              <p className="text-base text-foreground">{siteConfig?.address}</p>
            </div>
            <div className="h-px bg-border" />
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('about.factPhone')}</p>
              <a href={siteConfig?.phoneHref} className="text-xl font-display text-foreground hover:text-accent transition-colors inline-block py-1">
                {siteConfig?.phone}
              </a>
            </div>
            <div className="h-px bg-border" />
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('about.factGps')}</p>
              <p className="text-base text-foreground">{siteConfig?.gps?.lat}, {siteConfig?.gps?.lng}</p>
            </div>
            <div className="h-px bg-border" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('about.factRooms')}</p>
              <p className="text-base text-foreground">{t('about.factRoomsVal')}</p>
              <ValidationFlag />
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}