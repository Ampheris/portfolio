import ratopedia from '@/img/ratopedia.png';
import ratportal from '@/img/Ratportal-login.png';
import flappyrat from '@/img/Flappyrat-horizontal.png';
import portfolio from '@/img/portfolio.png';
import ratthjalpen from '@/img/ratthjalpen.png';
import { StaticImageData } from 'next/image';

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
  },
  {
    slug: 'rattportalen',
    title: 'Råttportalen',
    description:
      'Råttportalen is a member portal for Råtthjälpen, allowing members to manage their accounts, view and pay for their membership via Swish, and access various resources.The website provides an overview of animals currently in foster care, along with the latest newsletters and ads for animals available for adoption, keeping members informed and engaged with the organization’s work..',
    techStack: ['React', 'Typescript', 'MUI', 'Django restframework'],
    image: ratportal,
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
  },
  {
    slug: 'flappyrat',
    title: 'FlappyRat',
    description:
      'A flappy rat game build with basic typescript to mimic the popular flappy bird game. Built as a fun side project for the FuzzCon 2026 convention that Råtthjälpen is the year charity. It is built with React, inlinge svgs, tailwind CSS.',
    techStack: ['Typescript', 'React', 'Tailwind CSS'],
    image: flappyrat,
  },
];
