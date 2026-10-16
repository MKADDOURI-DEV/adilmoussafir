'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingEngineStatus from '@/app/booking/components/BookingEngineStatus';
import { useTranslation } from '@/context/LanguageContext';
import { rooms } from '@/data/rooms';
import { siteConfig } from '@/config/site';

type Errors = Partial<Record<'name' | 'phone' | 'dates' | 'guests', string>>;

export default function BookingFormSection() {
  const { t, lang } = useTranslation();
  const params = useSearchParams();

  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const arrival = String(data.get('arrival') || '');
    const departure = String(data.get('departure') || '');
    const guests = Number(data.get('guests') || 0);

    const next: Errors = {};
    if (name.length < 2) next.name = t('booking.errName');
    if (!/^[+\d][\d\s().-]{6,}$/.test(phone)) next.phone = t('booking.errPhone');
    if (!arrival || !departure || new Date(departure) <= new Date(arrival)) next.dates = t('booking.errDates');
    if (!Number.isInteger(guests) || guests < 1 || guests > 10) next.guests = t('booking.errGuests');

    setErrors(next);
    // No network call: no backend or PMS is configured, so nothing is sent or confirmed.
    setPrepared(Object.keys(next).length === 0);
  };

  const inputClass =
    'h-12 w-full px-4 rounded-lg border border-input bg-background text-base text-foreground focus:border-accent';
  const labelClass = 'flex flex-col gap-2 text-sm font-semibold text-foreground';
  const errClass = 'text-sm font-medium text-destructive';

  return (
    <section className="bg-background pt-14 pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-8">
          <div className="space-y-4 max-w-2xl">
            <h1 className="font-display text-display-lg text-foreground">{t('booking.title')}</h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t('booking.intro')}</p>
          </div>

          <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 sm:p-8 rounded-3xl border border-border bg-card">
            <label className={`${labelClass} sm:col-span-2`}>
              {t('booking.name')}
              <input name="name" type="text" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} />
              {errors.name && <span className={errClass}>{errors.name}</span>}
            </label>

            <label className={labelClass}>
              {t('booking.phone')}
              <input name="phone" type="tel" autoComplete="tel" className={inputClass} aria-invalid={!!errors.phone} />
              {errors.phone && <span className={errClass}>{errors.phone}</span>}
            </label>

            <label className={labelClass}>
              {t('booking.email')}
              <input name="email" type="email" autoComplete="email" className={inputClass} />
            </label>

            <label className={labelClass}>
              {t('booking.arrival')}
              <input name="arrival" type="date" defaultValue={params.get('arrival') ?? ''} className={inputClass} />
            </label>

            <label className={labelClass}>
              {t('booking.departure')}
              <input name="departure" type="date" defaultValue={params.get('departure') ?? ''} className={inputClass} />
            </label>
            {errors.dates && <p className={`${errClass} sm:col-span-2`}>{errors.dates}</p>}

            <label className={labelClass}>
              {t('booking.guests')}
              <input name="guests" type="number" min={1} max={10} defaultValue={Number(params.get('guests') ?? 2)} className={inputClass} aria-invalid={!!errors.guests} />
              {errors.guests && <span className={errClass}>{errors.guests}</span>}
            </label>

            <label className={labelClass}>
              {t('booking.category')}
              <select name="category" defaultValue={params.get('category') ?? ''} className={inputClass}>
                <option value="">—</option>
                {rooms.map((r) => (
                  <option key={r.slug} value={r.slug}>{r.name[lang]}</option>
                ))}
              </select>
            </label>

            <label className={`${labelClass} sm:col-span-2`}>
              {t('booking.notes')}
              <textarea name="notes" rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-base text-foreground focus:border-accent" />
            </label>

            <button type="submit" className="sm:col-span-2 h-14 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors tap-target">
              {t('booking.submit')}
            </button>
          </form>

          {prepared && (
            <div className="rounded-2xl border border-warning/40 bg-warning/10 p-6 space-y-3" role="status">
              <h2 className="font-display text-2xl text-foreground">{t('booking.successTitle')}</h2>
              <p className="text-base text-foreground">{t('booking.successText')}</p>
              <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold tap-target">
                {siteConfig.phone}
              </a>
            </div>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28">
          <BookingEngineStatus />
          <div className="rounded-3xl bg-primary text-primary-foreground p-7 space-y-4">
            <h2 className="font-display text-2xl">{t('common.call')}</h2>
            <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-accent text-accent-foreground font-semibold w-full tap-target">
              {siteConfig.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}