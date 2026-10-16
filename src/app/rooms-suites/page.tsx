import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomsCatalogSection from '@/app/rooms-suites/components/RoomsCatalogSection';

export default function RoomsSuitesPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsCatalogSection />
      </main>
      <Footer />
    </>
  );
}