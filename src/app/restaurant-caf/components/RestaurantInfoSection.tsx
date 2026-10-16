'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import ValidationFlag from '@/components/ValidationFlag';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function RestaurantInfoSection() {
  const { t } = useTranslation();

  const blocks = [
    { icon: 'BookOpenIcon', title: t('resto.menu'), text: t('resto.menuText') },
    { icon: 'ClockIcon', title: t('resto.hours'), text: t('resto.hoursText') },
    { icon: 'PhoneIcon', title: t('common.call'), text: t('resto.tableText') },
  ];

  return (
    <section className="bg-secondary pt-14 pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {blocks?.map((b, i) => (
            <Reveal key={b?.title} delay={i * 90} className="h-full">
              <div className="h-full p-6 rounded-3xl bg-background border border-border space-y-4">
                <span className="flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent">
                  <Icon name={b?.icon} size={24} />
                </span>
                <h2 className="font-display text-xl text-foreground">{b?.title}</h2>
                <p className="text-base text-muted-foreground leading-relaxed">{b?.text}</p>
                <ValidationFlag />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="h-full">
          <div className="h-full rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <h2 className="font-display text-3xl">{t('cta.title')}</h2>
              <p className="text-base opacity-85">{t('cta.text')}</p>
            </div>
            <a
              href={siteConfig?.phoneHref}
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
            >
              {siteConfig?.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}