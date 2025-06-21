'use client';
import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/MainPage/HeroSection';
import ProjectsSection from '@/components/MainPage/ProjectSection';
import TeamSection from '@/components/MainPage/TeamSection';
import ClientReviewSection from '@/components/MainPage/ReviewSection';
import TechStack from '@/components/MainPage/TechStackSection';
import About from '@/components/MainPage/About';



export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/background1.webp" as="image" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
   
     
      <HeroSection />
      <About />
      <ProjectsSection />
      <TeamSection />
      <ClientReviewSection />
      <TechStack/>

    </>
  );
}
