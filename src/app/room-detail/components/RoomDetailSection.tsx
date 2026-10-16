'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { getRoom } from '@/data/rooms';

const amenityMeta: Record<string, { icon: string; key: string }> = {
  wifi: { icon: 'WifiIcon', key: 'services.wifi' },
  ac: { icon: 'SunIcon', key: 'services.ac' },
};

export default function RoomDetailSection() {
  const { t, lang } = useTranslation();
  const params = useSearchParams();
  const room = getRoom(params.get('slug'));
  const [active, setActive] = useState(0);

  const photos = [
    `${room.photoLabel} · 1`,
    `${room.photoLabel} · 2`,
    `${room.photoLabel} · 3`,
  ];

  return (
    <section className="bg-background pt-10 pb-20">
      <div className="container space-y-8">
        <Link href="/rooms-suites" className="inline-flex items-center gap-2 text-sm font-semibold text-accent tap-target">
          <Icon name="ArrowLeftIcon" size={18} className="rtl:rotate-180" />
          {t('common.back')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <div className="space-y-4">
            <PhotoPlaceholder label={photos[active]} className="h-72 sm:h-[28rem] rounded-3xl" />
            <div className="grid grid-cols-3 gap-3">
              {photos.map((p, i) => (
                <button
                  key={p}
                  onClick={() => setActive(i)}
                  aria-label={p}
                  aria-pressed={active === i}
                  className={`h-20 sm:h-28 rounded-2xl overflow-hidden border-2 transition-colors ${
                    active === i ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <span className="photo-placeholder block w-full h-full" />
                </button>
              ))}
            </div>

            <Reveal>
              <div className="pt-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-display-lg text-foreground">{room.name[lang]}</h1>
                  <ValidationFlag />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{room.description[lang]}</p>

                <h2 className="font-display text-2xl text-foreground pt-4">{t('detail.amenities')}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((a) => {
                    const meta = amenityMeta[a];
                    if (!meta) return null;
                    return (
                      <li key={a} className="flex items-center gap-3 p-4 rounded-2xl bg-secondary border border-border">
                        <span className="flex items-center justify-center size-10 rounded-full bg-accent/10 text-accent">
                          <Icon name={meta.icon} size={20} />
                        </span>
                        <span className="text-base font-medium">{t(meta.key)}</span>
                        <ValidationFlag className="ms-auto" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 rounded-3xl bg-primary text-primary-foreground p-7 space-y-5">
            <h2 className="font-display text-3xl">{t('detail.panel')}</h2>
            <p className="text-base opacity-85 leading-relaxed">{t('detail.panelText')}</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-primary-foreground/15 pb-3">
                <dt className="opacity-70">{t('rooms.capacity')}</dt>
                <dd>{room.capacity ?? t('rooms.toConfirm')}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-primary-foreground/15 pb-3">
                <dt className="opacity-70">{t('rooms.beds')}</dt>
                <dd>{room.beds ? room.beds[lang] : t('rooms.toConfirm')}</dd>
              </div>
              <div className="flex justify-between gap-4 pb-1">
                <dt className="opacity-70">{t('rooms.pricing')}</dt>
                <dd>{t('rooms.toConfirm')}</dd>
              </div>
            </dl>
            <Link
              href={`/booking?category=${room.slug}`}
              className="inline-flex w-full items-center justify-center px-6 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
            >
              {t('common.reserve')}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}