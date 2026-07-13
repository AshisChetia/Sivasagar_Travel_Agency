import React from 'react';
import { featuredServices } from '../../data/services';

const ServicesSection = ({ services = featuredServices }) => {
  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-8 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary tracking-tight mb-5">
            Our Services
          </h2>
          <p className="text-tertiary text-base leading-relaxed">
            Reliable, comfortable, and premium transportation solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-2xl p-8 flex flex-col transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">{service.title}</h3>
              <p className="text-tertiary text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
              <a href="/services" className="text-secondary font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all w-fit">
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
