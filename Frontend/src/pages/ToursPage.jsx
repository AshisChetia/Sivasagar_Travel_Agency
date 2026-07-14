import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/ui/Button';
import { allTours } from '../data/tours';
import { generateTourBookingMessage } from '../utils/whatsapp';

const ToursPage = () => {
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
    <main ref={containerRef} className="w-full bg-neutral flex flex-col items-center min-h-[80vh] py-20 px-4 sm:px-8 md:px-16">
      
      {/* Header Section */}
      <div className="animate-header text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
          Our Recent Tours
        </h1>
        <p className="text-lg text-tertiary leading-relaxed">
          Discover the memorable journeys we've facilitated across breathtaking landscapes. 
          Experience precision, comfort, and unforgettable moments.
        </p>
      </div>

      {/* Tours Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTours.map((tour) => (
            <div key={tour.id} className="animate-card h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-tertiary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                {/* Tour Image */}
                <div className="w-full h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Tour Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-primary mb-3">
                    {tour.title}
                  </h3>
                  <p className="text-tertiary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {tour.description}
                  </p>
                  <div className="mt-auto w-full">
                    <Button 
                      variant="primary"
                      className="w-full gap-2 py-3 rounded-lg shadow-sm shadow-secondary/10 hover:shadow-secondary/30 transition-all !bg-[#0f6048] hover:!bg-[#0c4a37] text-white"
                      onClick={() => window.open(generateTourBookingMessage(tour.title), '_blank', 'noopener,noreferrer')}
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ToursPage;
