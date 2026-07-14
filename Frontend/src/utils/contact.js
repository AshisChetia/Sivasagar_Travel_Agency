/**
 * Utility functions for Phone and Email Links
 */

export const PHONE_NUMBER = '+919876543210';
export const DISPLAY_PHONE = '+91 98765 43210';

export const EMAIL_ADDRESS = 'booking@sivasagartravel.com'; // Change this to your real email when needed

/**
 * Generates a clickable phone link
 * @returns {string} tel URI
 */
export const generatePhoneLink = () => {
  return `tel:${PHONE_NUMBER}`;
};

/**
 * Generates a pre-filled email link
 * @returns {string} mailto URI
 */
export const generateEmailLink = () => {
  const subject = 'Booking Inquiry - Sivasagar Travel';
  const body = 'Hello Sivasagar Travel,\n\nI am looking to book a ride and would like some more information. Could you please help me with the details?\n\nThank you.';
  
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
