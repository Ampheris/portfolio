'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import FloatingLines from '@/components/FloatingLines';
import ProfileCard from '@/components/ProfileCard';


export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
        .from(".nav-item", {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.5");
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={comp} className="min-h-screen bg-gray-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-gray-950/70 border-b border-white/5">
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-purple-400 transition-colors nav-item">About</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors nav-item">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors nav-item">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors nav-item">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950 -z-10"></div>
        <div className="absolute inset-0 w-full h-full">
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            linesGradient={['#A855F7', '#EC4899', '#3B82F6']}
            lineCount={7}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        <div className="relative z-10 pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 hero-text tracking-tight pointer-events-auto">
            Mathilda <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">Holmström</span>
          </h1>
          <p className="text-lg md:text-4xl max-w-4xl hero-text leading-relaxed pointer-events-auto mx-auto">
            Helsingborg, Sweden.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400 text-center md:text-left">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-auto flex justify-center">
              <ProfileCard behindGlowColor="#A855F7" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a 28-year-old developer living in Helsingborg, Sweden, with my Fiancé and my 7-year-old dog.
                I specialize in building scalable web applications using a diverse stack that includes Django, React, Vue, and Tailwind CSS.
                I enjoy solving complex problems and continuously learning new tools to improve my workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['Django', 'Tailwind CSS', 'MUI', 'React', 'Vue', 'Python Eve', 'Figma', 'Python'].map((skill) => (
              <div key={skill} className="p-6 bg-gray-900 rounded-xl text-center hover:bg-gray-800 transition-all border border-gray-800 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                <span className="font-semibold text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-purple-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2].map((item) => (
              <div key={item} className="group bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">Project Title {item}</h3>
                  <p className="text-gray-400 mb-6">A brief description of the project, highlighting the key features and the problem it solves for users.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs font-medium bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full">Next.js</span>
                    <span className="text-xs font-medium bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full">Tailwind</span>
                  </div>
                  <div className="flex gap-6">
                    <a href="#" className="text-sm font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-1">Live Demo <span>→</span></a>
                    <a href="#" className="text-sm font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-1">GitHub <span>→</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Work Together</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <a href="mailto:hello@example.com" className="inline-block px-10 py-4 rounded-full bg-white text-gray-950 font-bold hover:bg-purple-400 transition-colors duration-300">
          Say Hello
        </a>

        <div className="mt-16 flex justify-center gap-10 text-gray-500">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </section>
    </main>
  );
}