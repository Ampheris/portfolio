import ProfileCard from "../ProfileCard";

export default function AboutSection() {
    const currentAge = new Date().getFullYear() - 1997;
    const dogAge = new Date().getFullYear() - 2016;

    return (
        <section id="about" className="py-24 px-6 md:px-20 bg-gray-900/50">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400 text-center md:text-left">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-auto flex justify-center">
                        <ProfileCard behindGlowColor="#A855F7" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I’m a {currentAge}-year-old developer living in Helsingborg, Sweden, together with my fiancé and our {dogAge}-year-old dog.
                            I enjoy building modern, scalable web applications using tools like Django, React, Vue, and Tailwind CSS.
                            I’m naturally curious, enjoy solving tricky problems, and I’m always looking for better ways to write clean, efficient code.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}