import React, { useEffect, useRef } from 'react';
import Button from '../components/ui/Button';
import { contactMethods } from '../data/contactMethods';
import { gsap } from 'gsap';

const IconWrapper = ({ icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        );
      case 'whatsapp':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        );
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        );
      case 'mail':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-12 h-12 rounded-full bg-neutral flex items-center justify-center text-primary mb-6 shadow-sm border border-tertiary/10">
      {getIcon()}
    </div>
  );
};

const ContactPage = () => {
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
    <div ref={containerRef} className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="animate-header text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-tertiary leading-relaxed">
          Whether you're looking to book your next ride, have a question about our fleet, 
          or just want to say hello, we are here to help. Reach out to us directly through 
          your preferred channel.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {contactMethods.map((method) => (
          <div key={method.id} className="animate-card h-full">
            <div 
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-tertiary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <IconWrapper icon={method.icon} />
              <h3 className="text-xl font-bold font-heading text-primary mb-1">
                {method.platform}
              </h3>
              <p className="text-tertiary mb-8 text-sm break-words w-full">
                {method.handle}
              </p>
              <div className="mt-auto w-full">
                <Button 
                  variant={method.variant}
                  className={`w-full py-3 font-semibold text-sm rounded-lg transition-all ${
                    method.variant === 'outline' 
                      ? 'border-2 border-primary text-primary hover:bg-tertiary/10 shadow-sm' 
                      : 'shadow-md shadow-secondary/30'
                  }`}
                  onClick={() => {
                  if (method.link.startsWith('http')) {
                    window.open(method.link, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = method.link;
                  }
                }}
                >
                  {method.actionText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
