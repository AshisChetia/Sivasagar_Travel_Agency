import React from 'react';

// Centralized services data
// You can easily CRUD services here and they will update across the entire site
export const allServices = [
  {
    id: 1,
    title: 'Airport Transfers',
    description: 'Reliable pickups and drop-offs for Jorhat and Dibrugarh airports, ensuring you never miss a flight.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l-3.5-3.5C11 6 9 5.5 7.5 6.5s-2 3.5-.5 5l3.5 3.5 8.2 1.8c1.5.3 3 .8 3 2.2 0 1.2-1 2-2.5 2h-6"/><path d="M2 22h20"/></svg>
    )
  },
  {
    id: 2,
    title: 'Sivasagar Heritage Tours',
    description: 'Guided local sightseeing covering historical landmarks like Rang Ghar, Talatal Ghar, and Shiva Dol.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v10"/><path d="M20 10v10"/><path d="M10 10v10"/><path d="M14 10v10"/><path d="M2 22h20"/><path d="m2 10 10-5 10 5"/></svg>
    )
  },
  {
    id: 3,
    title: 'Outstation Travel',
    description: 'Comfortable, safe long-distance rides for business trips or leisurely getaways across Assam.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
    )
  },
  {
    id: 4,
    title: 'Monthly Rentals',
    description: 'Flexible and cost-effective corporate car rental solutions tailored for local businesses and professionals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
  },
  {
    id: 5,
    title: 'Wedding Car Rentals',
    description: 'Premium, beautifully decorated luxury vehicles to make your special occasion truly memorable.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m4.9 4.9 14.2 14.2"/><path d="M2 12h20"/><path d="m4.9 19.1 14.2-14.2"/></svg>
    )
  },
  {
    id: 6,
    title: 'Emergency 24/7 Support',
    description: 'Round-the-clock reliable assistance and transportation services for all your urgent travel needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 0 12 22a10 10 0 0 0 10-10Z"/><path d="M12 7v5l3 3"/></svg>
    )
  }
];

export const featuredServices = allServices.slice(0, 3);
