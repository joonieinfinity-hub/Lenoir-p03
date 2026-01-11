
import { SiteContent, MenuItem, EventItem, BlogPost, Testimonial } from './types';

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    headline: "Seasonal Fine Dining & Curated Wine Experiences",
    subheadline: "Farm-to-table cuisine celebrating Texas terroir, bold flavors, and unforgettable hospitality.",
    images: [
      "https://picsum.photos/seed/dining1/1920/1080",
      "https://picsum.photos/seed/garden1/1920/1080",
      "https://picsum.photos/seed/dish1/1920/1080"
    ]
  },
  about: {
    title: "The Spirit of Lenoir",
    philosophy: "Lenoir celebrates seasonal Texas ingredients with spice, heat, and robust flavor — reflecting Central Texas farm-to-table roots. We believe in the marriage of local produce and international inspiration.",
    founders: [
      {
        name: "Chef Todd Duplechan",
        bio: "Todd brings a lifetime of culinary travel and a deep love for Texas agriculture to the kitchen.",
        image: "https://picsum.photos/seed/chef1/400/500"
      },
      {
        name: "Chef Jessica Maher",
        bio: "Jessica's expertise in pastry and operations ensures every guest feels at home in our dining room.",
        image: "https://picsum.photos/seed/chef2/400/500"
      }
    ]
  },
  location: {
    address: "1807 S. First St, Austin, TX 78704, USA",
    phone: "(512) 215-9778",
    email: "reservations@lenoirrestaurant.com",
    hours: {
      "Sun - Thu": "4:30 PM - 10:00 PM",
      "Fri - Sat": "4:30 PM - 10:30 PM",
      "Tuesday": "Closed"
    }
  }
};

export const INITIAL_MENU: MenuItem[] = [
  {
    id: '1',
    name: "Blue Corn Pecan Hushpuppies",
    description: "Honey butter, seasonal spice, toasted pecans.",
    price: "14",
    category: 'Starter',
    dietary: ['Vegetarian'],
    image: "https://picsum.photos/seed/hp1/400/300"
  },
  {
    id: '2',
    name: "Roasted Hill Country Quail",
    description: "Texas peach glaze, cornbread stuffing, bitter greens.",
    price: "34",
    category: 'Main',
    image: "https://picsum.photos/seed/quail/400/300"
  },
  {
    id: '3',
    name: "Texas Gulf Catch",
    description: "Seasonal preparation of fresh-caught coastal fish.",
    price: "38",
    category: 'Main',
    image: "https://picsum.photos/seed/fish/400/300"
  },
  {
    id: '4',
    name: "Almond Cake",
    description: "Burnt honey ice cream, macerated berries.",
    price: "12",
    category: 'Dessert',
    dietary: ['Vegetarian'],
    image: "https://picsum.photos/seed/cake/400/300"
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: '1',
    title: "Robert Sinskey Wine Dinner",
    date: "2024-11-15",
    time: "6:30 PM",
    description: "A multi-course pairing event featuring the iconic wines of Napa's Robert Sinskey Vineyards.",
    image: "https://picsum.photos/seed/wine1/600/400",
    rsvpLink: "https://resy.com"
  },
  {
    id: '2',
    title: "Annual Beefsteak Dinner",
    date: "2024-12-05",
    time: "7:00 PM",
    description: "Join us for our signature communal dining experience celebrating seasonal cuts and bold reds.",
    image: "https://picsum.photos/seed/beef/600/400",
    rsvpLink: "https://resy.com"
  }
];

export const INITIAL_BLOG: BlogPost[] = [
  {
    id: '1',
    title: "Autumn at Lenoir",
    excerpt: "Exploring the warm palettes of Texas squash and seasonal game.",
    content: "Fall in Central Texas is a unique season of transition...",
    date: "2024-10-12",
    category: "Seasonal",
    image: "https://picsum.photos/seed/blog1/800/400"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Sarah M.",
    text: "The wine garden is Austin's best kept secret. Impeccable service and flavors I've never tasted before.",
    rating: 5
  },
  {
    id: '2',
    name: "David L.",
    text: "True farm-to-table excellence. The roasted quail was life-changing.",
    rating: 5
  }
];
