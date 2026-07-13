import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setActiveLink('Home');
    else if (location.pathname === '/fleet') setActiveLink('Fleet');
    else if (location.pathname === '/services') setActiveLink('Services');
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'Tours', href: '#' },
  ];

  return (
    <nav className="w-full py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between bg-neutral sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-xl md:text-xl font-bold font-heading text-primary tracking-tight">
          Sivasagar Travel
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-primary p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <>
              <line x1="18" x2="6" y1="6" y2="18"/>
              <line x1="6" x2="18" y1="6" y2="18"/>
            </>
          ) : (
            <>
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </>
          )}
        </svg>
      </button>

      {/* Right Side: Nav Links and Action Button */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setActiveLink(link.name)}
            className={`font-semibold text-sm transition-all ${
              activeLink === link.name 
                ? 'text-secondary border-b-2 border-secondary pb-1' 
                : 'text-tertiary hover:text-primary pb-1 border-b-2 border-transparent'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        <Button 
          variant={activeLink === 'Contact Us' ? 'primary' : 'outline'} 
          className={`border-2 font-bold text-sm px-6 py-2 ml-2 transition-all ${activeLink === 'Contact Us' ? 'border-transparent shadow-md' : 'border-tertiary/40 hover:bg-tertiary/10'}`}
          onClick={() => setActiveLink('Contact Us')}
        >
          Contact Us
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral border-t border-tertiary/10 shadow-xl py-4 px-4 flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsMenuOpen(false);
              }}
              className={`font-semibold text-lg py-3 px-2 rounded-lg transition-all ${
                activeLink === link.name 
                  ? 'bg-secondary/10 text-secondary' 
                  : 'text-tertiary hover:bg-tertiary/5 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-tertiary/10">
            <Button 
              variant="primary" 
              className="w-full font-bold py-3.5 text-base"
              onClick={() => {
                setActiveLink('Contact Us');
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
