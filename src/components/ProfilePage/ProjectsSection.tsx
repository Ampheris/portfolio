import Link from 'next/link';
import { projects } from './projects';

export default function ProjectsSection() {
  const techColors: { [key: string]: string } = {
    React: 'bg-blue-900/30 text-blue-300',
    MUI: 'bg-indigo-900/30 text-indigo-300',
    'Django restframework': 'bg-red-900/30 text-red-300',
    'Next.js': 'bg-zinc-800 text-zinc-300',
    'Tailwind CSS': 'bg-cyan-900/30 text-cyan-300',
    'Node.js': 'bg-green-900/30 text-green-300',
    Typescript: 'bg-blue-900/30 text-blue-300',
  };

  return (
    <section id="projects" className="px-6 py-24 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-purple-400 md:text-5xl">
          Featured Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map(({ title, description, techStack, image, slug }, index) => (
            <div
              key={`project-${index}`}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-all duration-300 hover:border-purple-500/50"
            >
              {image ? (
                <div className="h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={title}
                    className="object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="bg-linear-to-br h-64 from-gray-800 to-gray-900 transition-transform duration-500 group-hover:scale-105"></div>
              )}
              <div className="p-4">
                <h3 className="mb-3 text-2xl font-bold text-white">{title} </h3>
                <p className="mb-6 text-gray-400">{description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        techColors[tech] || 'bg-purple-900/40 text-purple-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${slug}`}
                  className="mx-auto block w-fit rounded-full bg-gray-800 px-6 py-2 text-center text-white transition-colors duration-300 hover:bg-purple-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
