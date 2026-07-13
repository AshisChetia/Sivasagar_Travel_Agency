import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-12 md:pt-16 pb-6 md:pb-8 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold font-heading text-neutral tracking-tight">
              Sivasagar Travel
            </span>
            <p className="text-tertiary text-sm leading-relaxed max-w-xs">
              Professional Car Rental Services for Sivasagar and beyond.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-tertiary hover:text-neutral transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral font-bold mb-2">Quick Links</h4>
            <a href="#" className="text-tertiary text-sm hover:text-neutral transition-colors">Privacy Policy</a>
            <a href="#" className="text-tertiary text-sm hover:text-neutral transition-colors">Terms of Service</a>
            <a href="#" className="text-tertiary text-sm hover:text-neutral transition-colors">FAQ</a>
            <a href="#" className="text-tertiary text-sm hover:text-neutral transition-colors">Support</a>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral font-bold mb-2">Contact</h4>
            <div className="flex items-center gap-3 text-tertiary text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3 text-tertiary text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              book@sivasagartravel.in
            </div>
          </div>
          
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-tertiary/20 text-center">
          <p className="text-tertiary/80 text-sm">
            © {new Date().getFullYear()} Sivasagar Travel Agency. Professional Car Rental Services.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
