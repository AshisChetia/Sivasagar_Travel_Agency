import React from 'react';
import CarCard from '../ui/CarCard';
import { featuredCars } from '../../data/cars';

const FleetSection = ({ cars = featuredCars }) => {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 sm:px-8 md:px-16 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/20 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary tracking-tight mb-5">
            Our Premium Fleet
          </h2>
          <p className="text-tertiary text-base leading-relaxed">
            Experience comfort and luxury with our wide range of meticulously maintained vehicles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cars.map(car => (
            <CarCard 
              key={car.id}
              car={car}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
