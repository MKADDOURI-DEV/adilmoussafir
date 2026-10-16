import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingFormSection from '@/app/booking/components/BookingFormSection';

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="container py-24 text-muted-foreground">…</div>}>
          <BookingFormSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}