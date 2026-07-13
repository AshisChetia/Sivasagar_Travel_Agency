import React from 'react';

// Centralized features data (used in Why Travel With Us and Feature Banner)
// You can easily CRUD features here
export const travelFeatures = [
  {
    id: 1,
    title: 'Verified Drivers',
    description: 'Professional, background-checked drivers trained for safe and smooth journeys.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    )
  },
  {
    id: 2,
    title: 'Clean Fleet',
    description: 'Immaculately maintained and sanitized vehicles ready for every trip.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
    )
  },
  {
    id: 3,
    title: 'Flat Pricing',
    description: 'Transparent rates with absolutely no hidden costs or unexpected surge pricing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )
  },
  {
    id: 4,
    title: 'Punctuality',
    description: 'We value your time with guaranteed on-time pickups and timely arrivals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 0 12 22a10 10 0 0 0 10-10Z"/><path d="M12 7v5l3 3"/></svg>
    )
  }
];
