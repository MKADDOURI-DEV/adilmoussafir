import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import RoomsPreviewSection from '@/app/components/RoomsPreviewSection';
import RestaurantPreviewSection from '@/app/components/RestaurantPreviewSection';
import ServicesLocationSection from '@/app/components/ServicesLocationSection';
import CallToActionSection from '@/app/components/CallToActionSection';

export default function HomePage() {
  return (
    <>
      <Header overlay />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsPreviewSection />
        <RestaurantPreviewSection />
        <ServicesLocationSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}