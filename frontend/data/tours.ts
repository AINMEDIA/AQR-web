// Centralized tour catalogue for AQR Web
// All prices are 'On request' for production

export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  highlights?: string[];
  location: string;
  availability: string;
  price?: string; // Always 'On request' or omitted
  slug?: string;
}

export const tours: Tour[] = [
  {
    id: "murchison-safari-2d",
    title: "2-Day Murchison Safari",
    description: "Experience wildlife and adventure in Uganda's largest park.",
    image: "/images/2 Day Murchison Safari.jpeg",
    duration: "2 Days",
    category: "Safari",
    highlights: ["Game drives", "Boat cruise", "Murchison Falls"],
    location: "Murchison Falls National Park, Uganda",
    availability: "Year-round",
    price: "On request",
    slug: "2-day-murchison-safari"
  },
  {
    id: "jinja-weekend",
    title: "Weekend Trip to Jinja",
    description: "Explore the source of the Nile and enjoy water sports.",
    image: "/images/Weekend Trip to Jinja.jpeg",
    duration: "3 Days",
    category: "Adventure",
    highlights: ["Source of the Nile", "White water rafting", "City tour"],
    location: "Jinja, Uganda",
    availability: "Year-round",
    price: "On request",
    slug: "weekend-trip-jinja"
  },
  {
    id: "kampala-city-tour",
    title: "Kampala City Tour",
    description: "Discover the vibrant capital city of Uganda.",
    image: "/images/Kampala City Tour.jpeg",
    duration: "1 Day",
    category: "City Tour",
    highlights: ["Cultural sites", "Local cuisine", "Shopping"],
    location: "Kampala, Uganda",
    availability: "Year-round",
    price: "On request",
    slug: "kampala-city-tour"
  },
  // Add more tours as needed
]; 