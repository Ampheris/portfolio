import ratopedia from '@/img/ratopedia/ratopedia.png';
import ratopediaArticle from '@/img/ratopedia/ratopedia-article.png';
import ratopediaCategories from '@/img/ratopedia/ratopedia-categories.png';

import ratportal from '@/img/Ratportal-login.png';

import flappyrat from '@/img/flappyRat/Flappyrat-horizontal.png';
import flappyRatGame from '@/img/flappyRat/flappy-rat-game.png';
import flappyRatStart from '@/img/flappyRat/flappyrat-start.png';
import flappyRatEnd from '@/img/flappyRat/flappy-rat-end.png';

import crmDashboard from '@/img/crm/dashboard.png';
import fosterHomes from '@/img/crm/foster-homes.png';

import portfolio from '@/img/portfolio.png';
import ratthjalpen from '@/img/ratthjalpen.png';
import { StaticImageData } from 'next/image';
import comingSoon from '@/img/coming-soon.png';

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  detailedDescription?: string[];
  gallery?: StaticImageData[];
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'ratthjalpen-crm',
    title: 'Råtthjälpen CRM',
    description:
      'The system streamlines the management of foster animals, foster homes, expenses, and memberships for Råtthjälpen.It tracks animal status, coordinates foster placements, and provides insights into financials, all while ensuring smooth communication with supporters.This system enhances operational efficiency and supports Råtthjälpen’s mission',
    techStack: ['React', 'Typescript', 'MUI', 'Django restframework'],
    image: ratthjalpen,
    detailedDescription: [
      'The first version of this CRM was built using a traditional Django setup with Jinja2 for templating. As my professional experience with React grew, I decided to re-architect the entire application as a personal learning project. This involved transforming the backend into a headless API using Django REST Framework and building a modern, responsive frontend with React. This process allowed me to stay current with the latest practices in the React ecosystem, deepen my understanding of RESTful APIs, and take the opportunity to implement a completely new and improved design.',
      'Before the CRM was introduced, Råtthjälpen relied heavily on Excel sheets to cases, foster homes, expenses, adopted animals and much more. This approach led to lost information, fragmented data, and made it extremely difficult to find historical records once animals had been adopted. Logging new animals, especially on mobile devices, was slow, frustrating, and often avoided due to how painful the process was.',
      'The new system was designed to replace spreadsheets entirely and act as a single source of truth. It logs everything related to an animals lifecycle, including basic information, expenses, attachments, timestamps, adoption details, adoption papers, and, when necessary, time of death. Every change is tracked, making historical data easy to access long after a case is closed.',
      'The CRM also manages foster homes with all necessary details such as contact information, addresses, and which animals they are currently fostering. In addition, it includes full member management for Råtthjälpen, expense tracking for the economic manager, and a structured overview of all active and historical cases.',
      'A strong focus was placed on usability, especially on mobile devices, ensuring that volunteers can quickly log information wherever they are. The result is a system that has drastically reduced administrative friction, preserved critical data, and made day-to-day operations significantly more efficient for everyone involved.',
      "Security and privacy are also core features. When a contact person or foster home leaves the organization, their personal information is redacted to protect their privacy. This allows the organization to maintain essential, non-personal historical data about an animal for its expected lifetime, after which the animal's records are also redacted, ensuring compliance with data protection principles.",
      'Please note, all images and data shown from the system are from a local development environment. The production data is confidential and handled with strict privacy controls, accessible only to authorized members of the organization.',
    ],
    gallery: [crmDashboard, fosterHomes],
  },
  {
    slug: 'rattportalen',
    title: 'Råttportalen',
    description:
      'Råttportalen is a member portal for Råtthjälpen, allowing members to manage their accounts, view and pay for their membership via Swish, and access various resources.The website provides an overview of animals currently in foster care, along with the latest newsletters and ads for animals available for adoption, keeping members informed and engaged with the organization’s work..',
    techStack: ['React', 'Typescript', 'MUI', 'Django restframework'],
    image: ratportal,
    detailedDescription: [
      'Råttportalen was built as a dedicated member portal to strengthen engagement between Råtthjälpen and its supporters. Members can manage their profiles, handle memberships, and stay up to date with the organization’s work through newsletters and adoption listings.',
      'The platform integrates Swish payments, secure authentication, and dynamic content fetched from the backend, ensuring a smooth and reliable user experience. Special care was taken to make the interface accessible and easy to navigate for users of all technical levels.',
      'By bringing communication, payments, and information into a single platform, Råttportalen has become a central hub for members and an important extension of Råtthjälpen’s digital ecosystem.',
    ],
  },
  {
    slug: 'ratopedia',
    title: 'Ratopedia',
    description:
      'Ratopedia is a website that hosts a collection of articles about pet rats. It was originally built using Django, HTML, and CSS, and included a markdown editor for creating content. To make content management easier and provide a smoother experience for the team, the site was later migrated to WordPress. During 2025, the site had 4,600 users and 16,000 page views.',
    techStack: ['Django', 'WordPress', 'HTML', 'CSS', 'Jinja2'],
    image: ratopedia,
    detailedDescription: [
      'Ratopedia was initially developed using a stack of Django, HTML, CSS, and Jinja2, with a Markdown editor integrated for content management. The goal was to provide an easy way for writers to create and publish articles. However, it soon became apparent that most contributors were not familiar with Markdown, which created a barrier to content creation.',
      "To prioritize ease of use for the writers and streamline the publishing workflow, the decision was made to migrate the entire site to WordPress. This move was also a strategic opportunity to explore WordPress's capabilities for hosting, content management, and rapid website development. The migration successfully empowered the team, allowing them to focus on creating quality content without technical hurdles, and provided valuable insights into using WordPress as a versatile platform.",
    ],
    gallery: [ratopediaArticle, ratopediaCategories],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description:
      'This website! A personal portfolio built to showcase my projects and skills, featuring a modern design with smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Typescript'],
    image: portfolio,
    detailedDescription: [
      'This portfolio was built as a way to present my work, skills, and personality in a clear and engaging way. It is fully responsive and designed with a strong focus on performance, accessibility, and clean visual hierarchy.',
      'The site is built with Next.js and Tailwind CSS, allowing for fast load times, smooth animations, and a flexible component-based structure. Each project page is data-driven, making it easy to expand and iterate over time.',
      'Beyond being a showcase, the portfolio also serves as a living project where I continuously experiment with new ideas, refine UI details, and improve the overall developer and user experience.',
    ],
  },
  {
    slug: 'flappyrat',
    title: 'FlappyRat',
    description:
      'A flappy rat game build with basic typescript to mimic the popular flappy bird game. Built as a fun side project for the FuzzCon 2026 convention that Råtthjälpen is the year charity. It is built with React, inlinge svgs, tailwind CSS.',
    techStack: ['Typescript', 'React', 'Tailwind CSS'],
    image: flappyrat,
    url: 'https://ampheris.github.io/flappyrat/',
    detailedDescription: [
      'FlappyRat is a playful side project inspired by the classic Flappy Bird game, created as a fun and engaging contribution to FuzzCon 2026, where Råtthjälpen is the chosen charity.',
      'The game is built with React and TypeScript, using inline SVGs for graphics and Tailwind CSS for styling. The focus was on keeping the implementation lightweight while still delivering responsive controls and smooth gameplay.',
      'While simple by design, the project was a great exercise in game logic, animation timing, and user interaction, and it helped bring some extra attention and joy to the event.',
    ],

    gallery: [flappyRatGame, flappyRatStart, flappyRatEnd],
  },
  {
    slug: 'coming soon',
    title: 'Coming Soon...',
    description:
      'A new project is on its rise. It is not ready to be shown yet, but it an exciting one! Stay tuned for updates, more information will be shared when the time is right.',
    techStack: [],
    image: comingSoon,
  },
];
