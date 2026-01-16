export default function SkillSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue', 'Typescript', 'Tailwind CSS', 'MUI', 'Figma'],
    },
    {
      title: 'Backend',
      skills: ['Django', 'Python', 'Python Eve', 'Go', 'Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="bg-gray-900/50 px-6 py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-purple-400 md:text-5xl">
          Tech Stack
        </h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-2xl font-semibold text-gray-300">{category.title}</h3>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative flex items-center justify-center rounded-2xl border border-white/5 bg-gray-900/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
                  >
                    <div className="bg-linear-to-br absolute inset-0 rounded-2xl from-purple-600/10 to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 text-lg font-medium text-gray-400 transition-colors duration-300 group-hover:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
