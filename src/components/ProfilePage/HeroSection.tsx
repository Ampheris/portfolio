import FloatingLines from '../FloatingLines';

export default function HeroSection() {
  const fullName = 'Mathilda Holmström';
  const location = 'Helsingborg, Sweden';

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 h-full w-full">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          linesGradient={['#A855F7', '#EC4899', '#3B82F6']}
          lineCount={5}
          lineDistance={5}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="pointer-events-none relative z-10">
        <h1 className="hero-text mb-6 text-5xl font-extrabold tracking-tight md:text-8xl">
          {fullName}
        </h1>
        <p className="hero-text mx-auto max-w-4xl text-lg md:text-4xl">
          Fullstack developer @ {location}
        </p>
      </div>
    </section>
  );
}
