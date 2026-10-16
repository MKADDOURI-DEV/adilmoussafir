import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomDetailSection from '@/app/room-detail/components/RoomDetailSection';

export default function RoomDetailPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="container py-24 text-muted-foreground">…</div>}>
          <RoomDetailSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}