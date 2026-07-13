import React, { useEffect } from 'react';
import Button from './Button';

const CarModal = ({ car, onClose }) => {
  // Prevent scrolling on the background when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!car) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-neutral shadow-md text-primary hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative bg-[#f3f4f6] min-h-[250px] md:min-h-0">
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur text-secondary font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            Available Now
          </div>
          <img 
            src={car.image} 
            alt={car.title} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:p-10 overflow-y-auto bg-white">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary leading-tight">
              {car.title}
            </h2>
            <div className="text-right flex-shrink-0">
              <div className="text-xs text-tertiary font-medium">starting from</div>
              <div className="text-secondary font-bold text-xl md:text-2xl font-heading">
                ₹{car.price}<span className="text-sm text-tertiary font-normal">/day</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-tertiary text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Sivasagar
          </div>

          <div className="border-t border-tertiary/10 w-full mb-6" />

          {/* Specs Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-neutral/60 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              {car.seats} Seats
            </div>
            <div className="bg-neutral/60 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19 9 10.5l8.5-8.5"/><path d="M2 13h20"/><path d="m4.5 19 8.5-8.5L4.5 2"/></svg>
              AC
            </div>
            <div className="bg-neutral/60 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8"/><path d="M14 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/><path d="M18 10V8a2 2 0 0 0-2-2h-2"/></svg>
              {car.fuelType}
            </div>
            <div className="bg-neutral/60 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              {car.transmission}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-tertiary text-xs font-bold uppercase tracking-wider mb-4">Features & Condition</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {car.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-primary text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <Button variant="primary" className="w-full gap-2 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all !bg-[#0f6048] hover:!bg-[#0c4a37]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                <path d="M8 12h.01"/>
                <path d="M12 12h.01"/>
                <path d="M16 12h.01"/>
              </svg>
              Book this car on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
