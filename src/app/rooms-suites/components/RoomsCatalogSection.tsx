'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';
import { rooms } from '@/data/rooms';

type Filter = 'all' | 'chambre' | 'suite';

export default function RoomsCatalogSection() {
  const { t, lang } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('rooms.all') },
    { key: 'chambre', label: t('rooms.chambres') },
    { key: 'suite', label: t('rooms.suites') },
  ];

  const visible = rooms.filter((r) => filter === 'all' || r.type === filter);

  return (
    <section className="bg-background pt-14 pb-20">
      <div className="container space-y-10">
        <div className="space-y-5 max-w-3xl">
          <h1 className="font-display text-display-lg text-foreground">{t('rooms.title')}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t('rooms.intro')}</p>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors tap-target ${
                filter === f.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground border-border hover:border-accent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento map per filter state is a uniform 2-col grid for the catalog (no row spans) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((room, i) => (
            <Reveal key={room.slug} delay={i * 80}>
              <article className="flex flex-col h-full rounded-3xl border border-border bg-card text-card-foreground overflow-hidden">
                <PhotoPlaceholder label={room.photoLabel} className="h-60" />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-2xl">{room.name[lang]}</h2>
                    <ValidationFlag />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{room.description[lang]}</p>
                  <dl className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{t('rooms.capacity')}</dt>
                      <dd className="text-foreground">{room.capacity ?? t('rooms.toConfirm')}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{t('rooms.beds')}</dt>
                      <dd className="text-foreground">{room.beds ? room.beds[lang] : t('rooms.toConfirm')}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{t('rooms.surface')}</dt>
                      <dd className="text-foreground">{room.surface ? `${room.surface} m²` : t('rooms.toConfirm')}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <Link
                      href={`/room-detail?slug=${room.slug}`}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-border font-semibold text-foreground hover:border-accent hover:text-accent transition-colors tap-target"
                    >
                      {t('rooms.details')}
                    </Link>
                    <Link
                      href={`/booking?category=${room.slug}`}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
                    >
                      {t('common.reserve')}
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}