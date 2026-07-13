import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200';
  
  const variants = {
    primary: 'bg-secondary text-neutral hover:bg-secondary/90 px-6 py-2.5', // Green CTA
    dark: 'bg-primary text-neutral hover:bg-primary/90 px-6 py-2.5', // Dark CTA
    secondary: 'bg-tertiary text-neutral hover:bg-tertiary/90 px-6 py-2.5',
    // We are using outline as requested for the Navbar button
    outline: 'border border-tertiary/50 text-primary hover:bg-tertiary/10 px-6 py-2.5',
    ghost: 'text-primary hover:bg-tertiary/10 px-4 py-2',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
