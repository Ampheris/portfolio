import ratopedia from '@/img/ratopedia.png';
import ratportal from '@/img/Ratportal-login.png';

import flappyrat from '@/img/Flappyrat-horizontal.png';
import flappyRatGame from '@/img/flappy-rat-game.png';
import flappyRatStart from '@/img/flappyrat-start.png';
import flappyRatEnd from '@/img/flappy-rat-end.png';

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
      'Before the CRM was introduced, Råtthjälpen relied heavily on Excel sheets to track animals, foster homes, and cases. This approach led to lost information, fragmented data, and made it extremely difficult to find historical records once animals had been adopted. Logging new animals—especially on mobile devices—was slow, frustrating, and often avoided due to how painful the process was.',
      'The new system was designed to replace spreadsheets entirely and act as a single source of truth. It logs everything related to an animal’s lifecycle, including basic information, expenses, attachments, timestamps, adoption details, adoption papers, and, when necessary, time of death. Every change is tracked, making historical data easy to access long after a case is closed.',
      'The CRM also manages foster homes with all necessary details such as contact information, addresses, and which animals they are currently fostering. In addition, it includes full member management for Råtthjälpen, expense tracking for the economic manager, and a structured overview of all active and historical cases.',
      'A strong focus was placed on usability, especially on mobile devices, ensuring that volunteers can quickly log information wherever they are. The result is a system that has drastically reduced administrative friction, preserved critical data, and made day-to-day operations significantly more efficient for everyone involved.',
    ],
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
    techStack: ['Next.js', 'Typescript', 'Tailwind CSS', 'Node.js'],
    image: ratopedia,
    detailedDescription: [
      'The migration to WordPress significantly improved the content creation workflow, allowing non-technical team members to publish articles with ease. We utilized custom post types and advanced custom fields to maintain the structured data format required for the rat care guides.',
      'Performance was a key focus during the rebuild. We implemented aggressive caching strategies and optimized image delivery, resulting in a 40% reduction in page load times. The site now serves as a reliable resource for the pet rat community.',
    ],
    gallery: [ratopedia, ratopedia],
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
