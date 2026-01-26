
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
    date: 'Oct 12, 2023'
  },
  {
    id: '2',
    number: 'EP 41',
    title: 'Predictive Analytics: Beyond the Crystal Ball',
    description: 'How data scientists are using historical patterns to forecast consumer behavior with unprecedented accuracy.',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
    duration: '38 mins',
    date: 'Sep 28, 2023'
  },
  {
    id: '3',
    number: 'EP 40',
    title: 'Leading Through Insights Crisis',
    description: 'Interview with the VP of Insights at a Fortune 500 company on pivoting during extreme market shifts.',
    thumbnail: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=600&q=80',
    duration: '52 mins',
    date: 'Sep 14, 2023'
  },
  {
    id: '4',
    number: 'EP 39',
    title: 'Behavioral Economics and UX Design',
    description: 'Why the best research looks at what people actually do, rather than just what they say in surveys.',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    duration: '41 mins',
    date: 'Aug 30, 2023'
  },
  {
    id: '5',
    number: 'EP 38',
    title: 'Global Trends in Market Research',
    description: 'A deep dive into cross-continental research methodologies and local cultural nuances.',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
    duration: '49 mins',
    date: 'Aug 16, 2023'
  },
  {
    id: '6',
    number: 'EP 37',
    title: 'The Ethics of Big Data',
    description: 'Balancing corporate data privacy requirements with the need for deep consumer personalization.',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80',
    duration: '35 mins',
    date: 'Aug 02, 2023'
  }
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Learning & Media',
    links: [
      { label: 'Learning Resources', href: '#' },
      { label: 'Courses & Certification Program', href: '#' },
      { label: 'MRII YouTube Channel', href: '#' },
      { label: 'Insights and Innovators Podcast', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Past Webinars', href: '#' },
    ]
  },
  {
    title: 'Organization',
    links: [
      { label: 'Our Research', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Sponsors', href: '#' },
      { label: 'Board of Directors', href: '#' },
      { label: 'Our History', href: '#' },
    ]
  },
  {
    title: 'Support & News',
    links: [
      { label: 'FAQs', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Our News', href: '#' },
      { label: 'Awards', href: '#' },
    ]
  }
];
