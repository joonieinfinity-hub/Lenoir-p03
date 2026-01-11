
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  dietary?: string[];
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  rsvpLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface SiteContent {
  hero: {
    headline: string;
    subheadline: string;
    images: string[];
  };
  about: {
    title: string;
    philosophy: string;
    founders: {
      name: string;
      bio: string;
      image: string;
    }[];
  };
  location: {
    address: string;
    phone: string;
    email: string;
    hours: { [key: string]: string };
  };
}
