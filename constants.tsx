
import React from 'react';
import { FooterColumn } from './types';

export const COLORS = {
  primary: '#eb2d3f',
  primaryHover: '#d11d2e',
  dark: '#0f172a',
  light: '#f9fafb',
  text: '#111827'
};

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
