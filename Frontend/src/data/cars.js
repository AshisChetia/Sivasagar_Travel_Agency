// All car data for the application
// Add, remove, or modify cars here to update both the landing page and the fleet page.

export const allCars = [
  {
    id: 1,
    title: 'Compact',
    specs: '5 Seats | AC | 1 Bag',
    seats: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    price: 1500,
    features: [ 'Ample Legroom', 'USB Charging', 'Regularly Serviced', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600&h=400' 
  },
  {
    id: 2,
    title: 'Premium Sedan',
    specs: '5 Seats | AC | 2 Bags',
    seats: 5,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    price: 2500,
    features: ['Premium Leather Seats', 'Ample Legroom', 'Bluetooth Audio', 'Regularly Serviced', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1555215695-30049fa6a3af?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 3,
    title: 'Luxury SUV',
    specs: '7 Seats | AC | 3 Bags',
    seats: 7,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    price: 4500,
    features: ['Spacious Cabin', 'Panoramic Sunroof', 'Advanced Safety', 'Chauffeur Driven', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 4,
    title: 'Maruti Swift',
    specs: '5 Seats | AC | 1 Bag',
    seats: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    price: 1800,
    features: ['Pristine Interior', 'Great Mileage', 'USB Charging', 'Regularly Serviced', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 5,
    title: 'Force Traveller',
    specs: '12 Seats | AC | 4 Bags',
    seats: 12,
    fuelType: 'Diesel',
    transmission: 'Manual',
    price: 5500,
    features: ['Group Travel', 'Ample Luggage Space', 'Pushback Seats', 'Experienced Driver', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 6,
    title: 'Toyota Innova Crysta',
    specs: '7 Seats | AC | 3 Bags',
    seats: 7,
    fuelType: 'Diesel',
    transmission: 'Manual',
    price: 3500,
    features: ['Pristine Interior', 'Ample Legroom', 'USB Charging', 'Regularly Serviced', 'Clean & Sanitized'],
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

// We only show the first 3 cars on the homepage's featured section
export const featuredCars = allCars.slice(0, 3);
