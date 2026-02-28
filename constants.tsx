
import React from 'react';
import { Episode, FooterColumn } from './types';

export const COLORS = {
  primary: '#eb2d3f',
  primaryHover: '#d11d2e',
  dark: '#0f172a',
  light: '#f9fafb',
  text: '#111827'
};

export const EPISODES: Episode[] = [
  {
    id: '1',
    number: 'EP 42',
    title: 'The Future of AI in Qualitative Research',
    description: 'Exploring how generative AI is transforming the way we gather and analyze sentiment across global markets.',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80',
    duration: '45 mins',
    date: 'Oct 12, 2023',
    topic: 'AI'
  },
  {
    id: '2',
    number: 'EP 41',
    title: 'Predictive Analytics: Beyond the Crystal Ball',
    description: 'How data scientists are using historical patterns to forecast consumer behavior with unprecedented accuracy.',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
    duration: '38 mins',
    date: 'Sep 28, 2023',
    topic: 'Innovation'
  },
  {
    id: '3',
    number: 'EP 40',
    title: 'Leading Through Insights Crisis',
    description: 'Interview with the VP of Insights at a Fortune 500 company on pivoting during extreme market shifts.',
    thumbnail: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=600&q=80',
    duration: '52 mins',
    date: 'Sep 14, 2023',
    topic: 'Leadership'
  },
  {
    id: '4',
    number: 'EP 39',
    title: 'Behavioral Economics and UX Design',
    description: 'Why the best research looks at what people actually do, rather than just what they say in surveys.',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    duration: '41 mins',
    date: 'Aug 30, 2023',
    topic: 'Innovation'
  },
  {
    id: '5',
    number: 'EP 38',
    title: 'Global Trends in Market Research',
    description: 'A deep dive into cross-continental research methodologies and local cultural nuances.',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
    duration: '49 mins',
    date: 'Aug 16, 2023',
    topic: 'Storytelling'
  },
  {
    id: '6',
    number: 'EP 37',
    title: 'The Ethics of Big Data',
    description: 'Balancing corporate data privacy requirements with the need for deep consumer personalization.',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80',
    duration: '35 mins',
    date: 'Aug 02, 2023',
    topic: 'AI'
  },
  {
    id: '7',
    number: 'EP 36',
    title: 'Building a Research-First Culture',
    description: 'How top-performing organizations embed insights into every business decision from product to marketing.',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    duration: '43 mins',
    date: 'Jul 20, 2023',
    topic: 'Leadership'
  },
  {
    id: '8',
    number: 'EP 35',
    title: 'Synthetic Data and Digital Twins',
    description: 'Can AI-generated respondents replace real ones? A critical look at the promise and pitfalls of synthetic data.',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    duration: '47 mins',
    date: 'Jul 06, 2023',
    topic: 'AI'
  },
  {
    id: '9',
    number: 'EP 34',
    title: 'From Analyst to Strategist',
    description: 'Practical advice for researchers who want to move from data reporting into strategic advisory roles.',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    duration: '36 mins',
    date: 'Jun 22, 2023',
    topic: 'Career Development'
  },
  {
    id: '10',
    number: 'EP 33',
    title: 'Storytelling with Data: Persuading the C-Suite',
    description: 'Master the art of translating complex research findings into compelling narratives that drive executive action.',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    duration: '40 mins',
    date: 'Jun 08, 2023',
    topic: 'Storytelling'
  },
  {
    id: '11',
    number: 'EP 32',
    title: 'Micro-Surveys and Mobile-First Research',
    description: 'Why shorter, mobile-optimized surveys are yielding higher quality data and better response rates.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    duration: '33 mins',
    date: 'May 25, 2023',
    topic: 'Innovation'
  },
  {
    id: '12',
    number: 'EP 31',
    title: 'Leading Remote Research Teams',
    description: 'Strategies for managing distributed insights teams while maintaining quality and collaboration.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    duration: '44 mins',
    date: 'May 11, 2023',
    topic: 'Leadership'
  },
  {
    id: '13',
    number: 'EP 30',
    title: 'AI-Powered Sentiment Analysis at Scale',
    description: 'How NLP and large language models are revolutionizing the way we process open-ended survey responses.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    duration: '50 mins',
    date: 'Apr 27, 2023',
    topic: 'AI'
  },
  {
    id: '14',
    number: 'EP 29',
    title: 'Navigating Career Pivots in Insights',
    description: 'Real stories from professionals who successfully transitioned between agency, client-side, and consulting roles.',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
    duration: '39 mins',
    date: 'Apr 13, 2023',
    topic: 'Career Development'
  },
  {
    id: '15',
    number: 'EP 28',
    title: 'The Power of Visual Storytelling in Research',
    description: 'Using infographics, video clips, and interactive dashboards to make research findings unforgettable.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    duration: '37 mins',
    date: 'Mar 30, 2023',
    topic: 'Storytelling'
  }
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Learning Resources',
    links: [
      { label: 'Knowledge Navigator', href: '#' },
      { label: 'Courses & Certification Program', href: '#' },
      { label: 'MRII YouTube Channel', href: '#' },
      { label: 'Insights and Innovators Podcast', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Past Webinars', href: '#' },
      { label: 'Our Research', href: '#' },
    ]
  },
  {
    title: 'About Us',
    links: [
      { label: 'Sponsors', href: '#' },
      { label: 'Board of Directors', href: '#' },
      { label: 'Our History', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact', href: '#' },
    ]
  },
  {
    title: 'Market Research Institute International',
    links: [
      { label: 'Our News', href: '#' },
      { label: 'Awards', href: '#' },
    ]
  }
];
