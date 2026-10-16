'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';
import { rooms } from '@/data/rooms';

export default function RoomsPreviewSection() {
  const { t, lang } = useTranslation();

  return (
    <section className="bg-secondary pt-14 pb-20">
      <div className="container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Reveal>
            <h2 className="font-display text-display-lg text-foreground">{t('rooms.title')}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/rooms-suites" className="inline-flex items-center text-base font-semibold text-accent underline underline-offset-4 tap-target">
              {t('common.seeRooms')}
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4">
          {rooms?.map((room, i) => (
            <Reveal key={room?.slug} delay={i * 90} className={`${room?.span} h-full`}>
              <Link
                href={`/room-detail?slug=${room?.slug}`}
                className="group relative flex flex-col justify-end h-full min-h-[240px] overflow-hidden rounded-3xl"
              >
                <PhotoPlaceholder label={room?.photoLabel} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                <div className="relative p-5 space-y-2">
                  <ValidationFlag />
                  <h3 className="font-display text-2xl text-background">{room?.name?.[lang]}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}