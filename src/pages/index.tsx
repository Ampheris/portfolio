'use client';

import { useRef, useLayoutEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import HeroSection from '@/components/ProfilePage/HeroSection';
import AboutSection from '@/components/ProfilePage/AboutSection';
import SkillSection from '@/components/ProfilePage/SkillSection';
import Navbar from '@/components/ProfilePage/Navbar';
import ProjectsSection from '@/components/ProfilePage/ProjectsSection';
import ContactSection from '@/components/ProfilePage/ContactSection';
import fatUnicorn from '@/img/fat-unicorn.jpeg';

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }).from(
        '.nav-item',
        {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={comp}
      className="min-h-screen bg-gray-950 font-sans text-white selection:bg-purple-500 selection:text-white"
    >
      <Head>
        <title>Mathilda Holmström</title>
        <link rel="icon" href={fatUnicorn.src} />
      </Head>

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillSection />

      <ContactSection />
    </main>
  );
}
