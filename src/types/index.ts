export interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  avatar: string;
  rating: number; // Added rating
}

export interface DestinationProps {
  image: string;
  name: string;
  description: string;
  tags: string[];
  priceCategory: string; // e.g., "Affordable", "Mid-Range", "Luxury"
}

export interface WhyChooseItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}