'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/ui/AppIcon';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

const services = [
  { key: 'services.wifi', icon: 'WifiIcon' },
  { key: 'services.ac', icon: 'SunIcon' },
  { key: 'services.parking', icon: 'TruckIcon' },
  { key: 'services.restaurant', icon: 'BuildingStorefrontIcon' },
];

export default function ServicesLocationSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary pt-16 pb-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-stretch">
        <div className="space-y-8">
          <Reveal>
            <h2 className="font-display text-display-lg text-foreground">{t('services.title')}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base text-muted-foreground flex flex-wrap items-center gap-3">
              {t('services.note')} <ValidationFlag />
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {services?.map((s, i) => (
              <Reveal key={s?.key} delay={i * 80}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border h-full">
                  <span className="flex items-center justify-center size-11 rounded-full bg-accent/10 text-accent shrink-0">
                    <Icon name={s?.icon} size={22} />
                  </span>
                  <span className="text-base font-medium text-foreground">{t(s?.key)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="h-full">
          <div className="h-full rounded-3xl bg-primary text-primary-foreground overflow-hidden flex flex-col">
            <iframe
              title="Hôtel Adil Moussafir — carte"
              src={siteConfig?.mapsEmbed}
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-display text-3xl">{t('location.title')}</h3>
                <p className="text-base opacity-85 leading-relaxed">{t('location.text')}</p>
                <p className="text-sm opacity-70">{siteConfig?.address}</p>
              </div>
              <a
                href={siteConfig?.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target w-fit"
              >
                {t('common.route')}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}