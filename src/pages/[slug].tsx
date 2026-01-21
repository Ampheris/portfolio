import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/ProfilePage/Navbar';
import { projects } from '@/components/ProfilePage/projects';

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-950 font-sans text-white">
        <Navbar />
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-400">Project Not Found</h1>
          <Link href="/#projects" className="text-gray-300 underline hover:text-white">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 font-sans text-white selection:bg-purple-500 selection:text-white">
      <Head>
        <title>Project: {project.title}</title>
      </Head>
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-20">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center text-purple-400 transition-colors hover:text-purple-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{project.title}</h1>

        <div className="grid items-start gap-12">
          <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl shadow-purple-900/20">
            <Image
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-purple-400">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-purple-400">About the Project</h2>
              {project.detailedDescription?.map((paragraph, index) => (
                <p key={index} className="mt-4 text-lg leading-relaxed text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-10 text-3xl font-bold text-purple-400">Project Gallery</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-purple-900/20"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
