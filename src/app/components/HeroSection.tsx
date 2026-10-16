'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  const { t } = useTranslation();
  const glowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      const mx = (e.clientX / window.innerWidth - 0.5) * 40;
      const my = (e.clientY / window.innerHeight - 0.5) * 30;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground text-background">
      <div className="photo-placeholder absolute inset-0" aria-hidden="true" style={{ transform: `translateY(${offset * 0.3}px)` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/65 to-foreground/45" />
      <div className="absolute inset-0 dune-glow" />

      <div ref={glowRef} className="absolute -top-20 -right-24 w-[26rem] h-[26rem] blob-terracotta animate-drift opacity-70" aria-hidden="true" />
      <div className="absolute bottom-10 -left-24 w-[22rem] h-[22rem] blob-sand animate-drift-slow opacity-40" aria-hidden="true" />
      <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative container min-h-screen flex flex-col justify-end pt-32 pb-12 sm:pb-16 gap-10">
        <div className="max-w-5xl space-y-6">
          <p className="opacity-0 animate-fade-up text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-secondary" style={{ animationDelay: '100ms' }}>
            {t('hero.eyebrow')}
          </p>
          <h1 className="opacity-0 animate-fade-up font-display text-hero-xl text-background" style={{ animationDelay: '250ms' }}>
            {t('hero.title')}
          </h1>
          <p className="opacity-0 animate-fade-up max-w-xl text-base sm:text-lg text-secondary leading-relaxed" style={{ animationDelay: '400ms' }}>
            {t('hero.subtitle')}
          </p>
          <p className="opacity-0 animate-fade-up text-xs text-secondary/80" style={{ animationDelay: '480ms' }}>
            {t('common.photoTemp')}
          </p>
        </div>

        <form
          action="/booking"
          method="get"
          className="opacity-0 animate-fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr_auto] gap-3 p-4 rounded-2xl bg-background/95 backdrop-blur-md text-foreground shadow-2xl"
          style={{ animationDelay: '600ms' }}
        >
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t('hero.arrival')}
            <input type="date" name="arrival" className="h-12 px-3 rounded-lg border border-input bg-background text-base text-foreground normal-case tracking-normal" />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t('hero.departure')}
            <input type="date" name="departure" className="h-12 px-3 rounded-lg border border-input bg-background text-base text-foreground normal-case tracking-normal" />
          </label>
          <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t('hero.guests')}
            <input type="number" name="guests" min={1} max={10} defaultValue={2} className="h-12 px-3 rounded-lg border border-input bg-background text-base text-foreground normal-case tracking-normal" />
          </label>
          <button type="submit" className="h-12 self-end px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target">
            {t('hero.search')}
          </button>
        </form>

        <div className="opacity-0 animate-fade-up flex flex-wrap items-center gap-4" style={{ animationDelay: '750ms' }}>
          <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-secondary/60 text-background font-semibold hover:bg-background hover:text-foreground transition-colors tap-target">
            {t('common.call')} · {siteConfig.phone}
          </a>
          <Link href="/rooms-suites" className="inline-flex items-center px-2 py-3 text-secondary underline underline-offset-4 hover:text-background tap-target">
            {t('common.seeRooms')}
          </Link>
        </div>
      </div>
    </section>
  );
}