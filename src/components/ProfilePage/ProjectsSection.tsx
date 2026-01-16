import ratopedia from '@/img/ratopedia.png';
import ratportal from '@/img/Ratportal-login.png';
import flappyrat from '@/img/Flappyrat-horizontal.png';
import portfolio from '@/img/portfolio.png';
import ratthjalpen from '@/img/ratthjalpen.png';

export default function ProjectsSection() {
    const projects = [
        {
            title: "Råtthjälpen CRM",
            description: "The system streamlines the management of foster animals, foster homes, expenses, and memberships for Råtthjälpen.It tracks animal status, coordinates foster placements, and provides insights into financials, all while ensuring smooth communication with supporters.This system enhances operational efficiency and supports Råtthjälpen’s mission",
            techStack: ["React", "Typescript", "MUI", "Django restframework"],
            image: ratthjalpen,
        },
        {
            title: "Råttportalen",
            description: "Råttportalen is a member portal for Råtthjälpen, allowing members to manage their accounts, view and pay for their membership via Swish, and access various resources.The website provides an overview of animals currently in foster care, along with the latest newsletters and ads for animals available for adoption, keeping members informed and engaged with the organization’s work..",
            techStack: ["React", "Typescript", "MUI", "Django restframework"],
            image: ratportal,
        },
        {
            title: "Ratopedia",
            description: "Ratopedia is a website that hosts a collection of articles about pet rats. It was originally built using Django, HTML, and CSS, and included a markdown editor for creating content. To make content management easier and provide a smoother experience for the team, the site was later migrated to WordPress. During 2025, the site had 4,600 users and 16,000 page views.",
            techStack: ["Next.js", "Typescript", "Tailwind CSS", "Node.js"],
            image: ratopedia,
        },
        {
            title: "Portfolio",
            description: "This website! A personal portfolio built to showcase my projects and skills, featuring a modern design with smooth animations.",
            techStack: ["Next.js", "Tailwind CSS", "Typescript"],
            image: portfolio,
        },
        {
            title: "FlappyRat",
            description: "A flappy rat game build with basic typescript to mimic the popular flappy bird game. Built as a fun side project for the FuzzCon 2026 convention that Råtthjälpen is the year charity. It is built with React, inlinge svgs, tailwind CSS.",
            techStack: ["Typescript", "React", "Tailwind CSS"],
            image: flappyrat,
        },
    ]

    const techColors: { [key: string]: string } = {
        "React": "bg-blue-900/30 text-blue-300",
        "MUI": "bg-indigo-900/30 text-indigo-300",
        "Django restframework": "bg-red-900/30 text-red-300",
        "Next.js": "bg-zinc-800 text-zinc-300",
        "Tailwind CSS": "bg-cyan-900/30 text-cyan-300",
        "Node.js": "bg-green-900/30 text-green-300",
        "Typescript": "bg-blue-900/30 text-blue-300",
    }

    return (
        <section id="projects" className="py-24 px-6 md:px-20 bg-gray-900/50">
            <div className="max-w-[80%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-purple-400">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map(({ title, description, techStack, image }, index) => (
                        <div key={`project-${index}`} className="group bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                            {image ? (
                                <div className="h-64 overflow-hidden">
                                    <img src={image.src} alt={title} className="object-fill group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            ) : (
                                <div className="h-64 bg-linear-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white">{title} </h3>
                                <p className="text-gray-400 mb-6">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {techStack.map((tech, i) => (
                                        <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full ${techColors[tech] || "bg-purple-900/40 text-purple-300"}`}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}