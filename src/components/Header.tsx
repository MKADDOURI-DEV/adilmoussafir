'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useTranslation, Lang } from '@/context/LanguageContext';

const links = [
  { href: '/', key: 'nav.home' },
  { href: '/rooms-suites', key: 'nav.rooms' },
  { href: '/restaurant-caf', key: 'nav.restaurant' },
  { href: '/contact', key: 'nav.contact' },
];

const langs: Lang[] = ['fr', 'en', 'ar'];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const solid = scrolled || !overlay;
  const base = overlay ? 'absolute' : 'sticky';
  const surface = solid
    ? 'bg-background/90 backdrop-blur-md border-b border-border text-foreground'
    : 'bg-transparent text-background';

  return (
    <header className={`${base} top-0 inset-x-0 z-50 transition-colors duration-300 ${surface}`}>
      <div className="container flex items-center justify-between h-20 gap-4">
        <Link href="/" className="flex items-center gap-2 tap-target">
          <AppLogo size={40} />
          <span className="font-display text-xl tracking-tight">Adil Moussafir</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-90 hover:opacity-100 hover:text-accent transition-colors tap-target flex items-center"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-current/30 p-0.5" role="group" aria-label="Langue">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 text-xs font-semibold uppercase rounded-full transition-colors tap-target ${
                  lang === l ? 'bg-accent text-accent-foreground' : 'hover:text-accent'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/booking"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors tap-target"
          >
            {t('nav.booking')}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center tap-target rounded-full border border-current/30"
            aria-label="Menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-primary/95 backdrop-blur-xl text-primary-foreground">
          <nav className="container flex flex-col gap-2 py-8" aria-label="Menu mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl py-3 border-b border-primary-foreground/15 tap-target"
              >
                {t(l.key)}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-full bg-accent text-accent-foreground font-semibold tap-target"
            >
              {t('nav.booking')}
            </Link>
            <div className="mt-6 flex gap-2" role="group" aria-label="Langue">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`flex-1 py-3 rounded-full text-sm font-semibold uppercase border border-primary-foreground/30 tap-target ${
                    lang === l ? 'bg-accent text-accent-foreground border-transparent' : ''
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}