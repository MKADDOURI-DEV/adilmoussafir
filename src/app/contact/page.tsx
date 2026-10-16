import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDetailsSection from '@/app/contact/components/ContactDetailsSection';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactDetailsSection />
      </main>
      <Footer />
    </>
  );
}