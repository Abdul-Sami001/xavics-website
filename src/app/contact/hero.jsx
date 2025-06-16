import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[385px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact-hero-bg.png" // replace with actual path
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-100"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Get in touch</h1>
        <p className="text-white text-base md:text-lg max-w-2xl leading-snug">
          Fill out the form below and a xavics representative will contact you as soon as possible.
          For immediate assistance, please call our sales line or email our customer support.
        </p>
      </div>
    </section>
  );
}