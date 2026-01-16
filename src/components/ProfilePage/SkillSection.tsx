export default function SkillSection() {
    const skills = [
        'Django', 'Tailwind CSS', 'MUI', 'React', 'Vue', 'Python Eve', 'Figma', 'Python', 'Go', 'Typescript', 'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'GitHub Actions'
    ]

    return (
        <section id="skills" className="py-24 px-6 md:px-20">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=" relative p-4 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}