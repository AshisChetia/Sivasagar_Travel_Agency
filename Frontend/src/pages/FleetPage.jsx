import React, { useEffect, useRef } from 'react';
import CarCard from '../components/ui/CarCard';
import { allCars } from '../data/cars';
import { gsap } from 'gsap';

const FleetPage = ({ cars = allCars }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });

      gsap.from(".animate-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
        clearProps: 'all'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="w-full bg-white flex flex-col items-center min-h-screen">
      
      {/* Hero Section with Custom Glowing Gradient */}
      <div className="animate-header relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/30 blur-[100px] rounded-[100%] pointer-events-none" />
        
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-6 text-center tracking-tight">
          Our Premium Fleet
        </h1>
        <p className="relative z-10 text-tertiary text-center max-w-2xl px-6 text-sm md:text-base leading-relaxed">
          Explore our range of well-maintained, comfortable, and reliable vehicles for your journey in and around Sivasagar.
        </p>
      </div>
      
      {/* Fleet Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cars.map((car) => (
            <div key={car.id} className="animate-card">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FleetPage;
