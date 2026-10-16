'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';
import ValidationFlag from '@/components/ValidationFlag';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig, pendingInfo } from '@/config/site';

export default function ContactDetailsSection() {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [attempted, setAttempted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = String(data.get('message') || '').trim();
    if (message.length < 10) {
      setError(t('contact.errMessage'));
      setAttempted(false);
      return;
    }
    setError('');
    // No backend or email service is configured: we must not pretend the message was sent.
    setAttempted(true);
  };

  const inputClass =
    'h-12 w-full px-4 rounded-lg border border-input bg-background text-base text-foreground focus:border-accent';

  return (
    <section className="bg-background pt-14 pb-20">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h1 className="font-display text-display-lg text-foreground">{t('contact.title')}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t('contact.intro')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6 flex flex-col">
            <Reveal>
              <div className="rounded-3xl bg-secondary border border-border p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('contact.address')}</p>
                  <p className="text-base text-foreground">{siteConfig.address}</p>
                </div>
                <div className="h-px bg-border" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t('contact.phone')}</p>
                  <a href={siteConfig.phoneHref} className="inline-block py-1 font-display text-2xl text-foreground hover:text-accent transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="h-px bg-border" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{t('contact.emailMissing')}</p>
                  <ValidationFlag />
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
                  >
                    {t('common.call')}
                  </a>
                  <a
                    href={siteConfig.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border font-semibold text-foreground hover:border-accent hover:text-accent transition-colors tap-target"
                  >
                    {t('common.route')}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="flex-1">
              <iframe
                title="Hôtel Adil Moussafir — carte"
                src={siteConfig.mapsEmbed}
                className="w-full h-72 lg:h-full min-h-[18rem] rounded-3xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-6">
              <h2 className="font-display text-2xl text-foreground">{t('contact.form')}</h2>
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                  {t('booking.name')}
                  <input name="name" type="text" autoComplete="name" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                  {t('booking.phone')}
                  <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                  {t('contact.message')}
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-base text-foreground focus:border-accent"
                    aria-invalid={!!error}
                  />
                  {error && <span className="text-sm font-medium text-destructive">{error}</span>}
                </label>
                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target"
                >
                  {t('contact.send')}
                </button>
              </form>

              {attempted && (
                <div className="rounded-2xl border border-warning/40 bg-warning/10 p-5 space-y-3" role="status">
                  <p className="text-base text-foreground">{t('contact.noBackend')}</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold tap-target"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-3xl bg-primary text-primary-foreground p-6 sm:p-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl">{t('footer.pending')}</h2>
              <ValidationFlag />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm sm:text-base opacity-90">
              {pendingInfo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}