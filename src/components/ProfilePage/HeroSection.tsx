import FloatingLines from "../FloatingLines";

export default function HeroSection() {
    const fullName = "Mathilda Holmström";
    const location = "Helsingborg, Sweden";

    return (
        <section className="h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
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

            <div className="relative z-10 pointer-events-none">
                <h1 className="text-5xl md:text-8xl font-extrabold mb-6 hero-text tracking-tight">
                    {fullName}
                </h1>
                <p className="text-lg md:text-4xl max-w-4xl hero-text mx-auto">
                    Fullstack developer @ {location}
                </p>
            </div>
        </section>
    );
}
