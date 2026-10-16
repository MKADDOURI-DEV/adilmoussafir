import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RestaurantIntroSection from '@/app/restaurant-caf/components/RestaurantIntroSection';
import RestaurantInfoSection from '@/app/restaurant-caf/components/RestaurantInfoSection';

export default function RestaurantCafePage() {
  return (
    <>
      <Header />
      <main>
        <RestaurantIntroSection />
        <RestaurantInfoSection />
      </main>
      <Footer />
    </>
  );
}