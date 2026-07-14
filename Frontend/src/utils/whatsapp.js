/**
 * Utility functions for WhatsApp Click-to-Chat Deep Linking
 */

// The company's main WhatsApp number (include country code without + or 00)
// Using 91 for India and the dummy number from the UI
export const WHATSAPP_NUMBER = '919876543210'; 

/**
 * Generates a pre-filled WhatsApp link for a specific car booking
 * @param {string} carTitle - The name of the car
 * @param {number|string} carPrice - The price per day
 * @returns {string} WhatsApp API URL
 */
export const generateCarBookingMessage = (carTitle, carPrice) => {
  const message = `Hello Sivasagar Travel! I am interested in booking the *${carTitle}* (starting at ₹${carPrice}/day). Could you please provide more details about its availability?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for general inquiries
 * @returns {string} WhatsApp API URL
 */
export const generateGeneralContactMessage = () => {
  const message = `Hello Sivasagar Travel! I am looking to book a ride and would like some more information. Could you please help me with the details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a pre-filled WhatsApp link for a tour booking
 * @param {string} tourTitle - The name of the tour
 * @returns {string} WhatsApp API URL
 */
export const generateTourBookingMessage = (tourTitle) => {
  const message = `Hello Sivasagar Travel! I am interested in booking the *${tourTitle}* tour. Could you please provide more details about the itinerary and pricing?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
