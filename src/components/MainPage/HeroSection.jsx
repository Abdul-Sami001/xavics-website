'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    type: 'image',
    src: '/images/background1.jpg',
    title: "Innovate with Xavics",
    description: "Bringing your ideas to life with cutting-edge technology, tailored solutions, and strategic innovation.",
    buttonText: "Learn More",
    buttonLink: "/about"
  },
  {
    type: 'image',
    src: '/images/back1.jpg',
    title: "Web Development Excellence",
    description: "Building robust, scalable web platforms that seamlessly connect your business to the world and drive meaningful engagement.",
    buttonText: "Our Web Work",
    buttonLink: "/portfolio"
  },
  {
    type: 'image',
    src: '/images/back2.jpg',
    title: "Mobile Mastery",
    description: "Crafting seamless, user-centric mobile experiences that empower users on the go and fuel business growth.",
    buttonText: "Explore Apps",
    buttonLink: "/portfolio"
  },
  {
    type: 'image',
    src: '/images/back3.webp',
    title: "AI & Desktop Innovation",
    description: "Merging smart automation with powerful desktop solutions to drive business intelligence, accelerate workflows, and enhance decision-making.",
    buttonText: "AI Solutions",
    buttonLink: "/portfolio"
  },
  {
    type: 'image',
    src: '/images/back4.webp', // ✅ FIXED: Use a unique image to avoid loop bugs
    title: "Journey with Us into the Future",
    description: "Embark on a transformative journey into tomorrow's digital landscape, where innovation meets opportunity for limitless growth.",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preload" href="/images/background1.jpg" as="image" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <div className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: true
          }}
          speed={1500}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div className="absolute inset-0 w-full h-full">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 28, ease: "linear" }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-black/50 z-10" />

              <motion.div
                className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-2xl mx-auto"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
  className="bg-gradient-to-r from-[#66CBF8] to-[#538FDA] shadow hover:from-[#538FDA] hover:to-[#3b6da6] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66CBFB] focus:ring-opacity-50"
  onClick={() => router.push(slide.buttonLink)}
  initial={{ y: 20 }}
  animate={{ y: 0 }}
  transition={{ delay: 0.4 }}
>
  {slide.buttonText}
</motion.button>
                   
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
