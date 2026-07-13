import React from 'react';
import { allServices } from '../data/services';
import { travelFeatures } from '../data/features';

const ServicesPage = () => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      
      {/* Hero Section with Custom Glowing Gradient */}
      <div className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
        {/* The beautiful radial gradient in the background matching the screenshot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/30 blur-[100px] rounded-[100%] pointer-events-none" />
        
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-6 text-center tracking-tight">
          Our Services
        </h1>
        <p className="relative z-10 text-tertiary text-center max-w-2xl px-6 text-sm md:text-base leading-relaxed">
          Reliable, comfortable, and premium transportation solutions tailored to your needs in and around Sivasagar.
        </p>
      </div>

      {/* Services Grid (6 Items) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allServices.map(service => (
            <div key={service.id} className="bg-[#f8f9fa] rounded-2xl p-8 flex flex-col transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">{service.title}</h3>
              <p className="text-tertiary text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
              <a href="#" className="text-secondary font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all w-fit">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Why Travel With Us Section */}
      <div className="w-full bg-[#f8f9fa] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="mb-14 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-5">
              Why Travel With Us?
            </h2>
            <p className="text-tertiary text-sm md:text-base leading-relaxed">
              We prioritize your safety, comfort, and time. Experience the difference of a premium service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {travelFeatures.map(feature => (
              <div key={feature.id} className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-5">
                  <div className="scale-75">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-primary font-bold text-base mb-3">{feature.title}</h4>
                <p className="text-tertiary text-xs md:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default ServicesPage;
