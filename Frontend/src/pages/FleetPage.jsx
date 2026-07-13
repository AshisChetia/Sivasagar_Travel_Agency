import React from 'react';
import CarCard from '../components/ui/CarCard';
import { allCars } from '../data/cars';

const FleetPage = ({ cars = allCars }) => {
  return (
    <main className="w-full bg-white flex flex-col items-center min-h-screen">
      
      {/* Hero Section with Custom Glowing Gradient */}
      <div className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
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
          {cars.map(car => (
            <CarCard 
              key={car.id}
              car={car}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FleetPage;
