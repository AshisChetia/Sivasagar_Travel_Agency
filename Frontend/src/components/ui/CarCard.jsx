import React, { useState } from 'react';
import Button from './Button';
import CarModal from './CarModal';

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, title, specs } = car;

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-tertiary/10 flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] duration-300 cursor-pointer"
      >
      {/* Car Image Container */}
      <div className="w-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover object-center mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
        <h3 className="text-xl md:text-2xl font-bold font-heading text-primary mb-1">{title}</h3>
        <p className="text-tertiary text-sm md:text-base mb-6">{specs}</p>
        
        <div className="mt-auto">
          <Button 
            variant="primary" 
            className="w-full gap-2 text-sm md:text-base py-3 rounded-lg shadow-sm shadow-secondary/10 hover:shadow-secondary/30"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              <path d="M8 12h.01"/>
              <path d="M12 12h.01"/>
              <path d="M16 12h.01"/>
            </svg>
            Book on WhatsApp
          </Button>
        </div>
      </div>
      </div>

      {isModalOpen && (
        <CarModal car={car} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default CarCard;
