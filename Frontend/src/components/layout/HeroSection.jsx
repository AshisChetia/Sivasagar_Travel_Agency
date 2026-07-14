import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import FeatureBanner from '../ui/FeatureBanner';
import { gsap } from 'gsap';

const HeroSection = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-hero-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
        clearProps: 'all'
      });
      
      gsap.from(".animate-banner", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
        clearProps: 'all'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col relative">
      {/* Hero Background and Content */}
      <div className="relative w-full min-h-[460px] h-[60vh] max-h-[600px] flex items-center">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            // Put your downloaded image in the public folder and name it 'hero-bg.jpg'
            backgroundImage: "url('/hero_image.avif')", 
            backgroundColor: '#1f2937' // Fallback color
          }}
        />
        
        {/* Gradient Overlay for text readability (Dark to light gradient left to right) */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary/95 via-primary/80 md:via-primary/70 to-transparent" />

        {/* Hero Content Left Aligned */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 pb-40 md:pb-32">
          <div className="max-w-xl">
            <h1 className="animate-hero-text text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-neutral leading-[1.2] md:leading-[1.1] mb-4 md:mb-5">
              Premium Car Rentals in <br className="hidden sm:block" /> Sivasagar
            </h1>
            <p className="animate-hero-text text-neutral/90 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-sm sm:max-w-none">
              Reliable, comfortable, and affordable travel solutions for local sightseeing and outstation trips. Available 24/7.
            </p>
            
            <div className="animate-hero-text">
              <Button onClick={() => navigate('/contact')} variant="primary" className="gap-2 text-sm md:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-secondary/20 hover:shadow-secondary/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  <path d="M8 12h.01"/>
                  <path d="M12 12h.01"/>
                  <path d="M16 12h.01"/>
                </svg>
                Book Your Ride Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Banner overlapping the hero section */}
      <div className="animate-banner w-full px-4 md:px-8 -mt-32 sm:-mt-24 md:-mt-16 lg:-mt-20 relative z-20">
        <FeatureBanner />
      </div>
    </section>
  );
};

export default HeroSection;
