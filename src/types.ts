export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export const RESTAURANT_INFO = {
  name: "Des Pardes Restaurant",
  tagline: "Traditional Pakistani Taste, Served with Elegance",
  address: "Saidpur Road, Rawalpindi, Pakistan",
  city: "Rawalpindi",
  phone: "(051) 2320009",
  phoneRaw: "0512320009",
  phoneIntl: "+92512320009",
  email: "dp1islamabad@hotmail.com",
  facebookUrl: "https://www.facebook.com/DespardesRestaurant/",
  instagramUrl: "https://www.instagram.com/despardes.restaurant/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Des+Pardes+Restaurant+Saidpur+Road+Rawalpindi",
} as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "chicken-karahi",
    name: "Chicken Karahi",
    description: "Rich and flavorful Pakistani-style chicken karahi.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80",
    category: "Karahi & Curries",
  },
  {
    id: "mutton-karahi",
    name: "Mutton Karahi",
    description: "Traditional mutton karahi with aromatic spices.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=500&q=80",
    category: "Karahi & Curries",
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    description: "Grilled chicken prepared with traditional spices.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=500&q=80",
    category: "BBQ & Grills",
  },
  {
    id: "seekh-kabab",
    name: "Seekh Kabab",
    description: "Juicy seasoned kababs with authentic BBQ flavor.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80",
    category: "BBQ & Grills",
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    description: "Fragrant rice layered with flavorful chicken and spices.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80",
    category: "Rice Specialties",
  },
  {
    id: "chicken-handi",
    name: "Chicken Handi",
    description: "Creamy and flavorful chicken prepared in traditional style.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80",
    category: "Karahi & Curries",
  },
  {
    id: "bbq-platter",
    name: "BBQ Platter",
    description: "A selection of grilled Pakistani BBQ favorites.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
    category: "BBQ & Grills",
  },
  {
    id: "fresh-naan",
    name: "Fresh Naan",
    description: "Soft traditional naan served with desi dishes.",
    price: "Price on Order",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
    category: "Tandoor",
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "flavors",
    title: "Traditional Pakistani Flavors",
    description: "Authentic recipes crafted with rich spices and time-honored cooking methods.",
    icon: "UtensilsCrossed",
  },
  {
    id: "experience",
    title: "Desi Dining Experience",
    description: "Warm, respectful hospitality capturing the essence of cultural culinary heritage.",
    icon: "Sparkles",
  },
  {
    id: "freshness",
    title: "Freshly Prepared Food",
    description: "Made fresh to order ensuring aromatic, piping-hot dishes every single time.",
    icon: "Flame",
  },
  {
    id: "family",
    title: "Family Dining",
    description: "A spacious, welcoming environment thoughtfully suited for families and gatherings.",
    icon: "Users2",
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    title: "Traditional Sizzling Karahi",
    category: "Desi Specialty",
    src: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    alt: "Piping hot Pakistani chicken karahi prepared with fresh herbs and spices",
  },
  {
    id: "g2",
    title: "Authentic Live BBQ Grill",
    category: "BBQ",
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    alt: "Charcoal grilled skewered Pakistani BBQ tikka and kababs",
  },
  {
    id: "g3",
    title: "Aromatic Basmati Biryani",
    category: "Rice Specialty",
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional chicken biryani garnished with fried onions and mint",
  },
  {
    id: "g4",
    title: "Clay Pot Handi Cooking",
    category: "Handi",
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    alt: "Rich traditional chicken handi slow-simmered in clay pot",
  },
  {
    id: "g5",
    title: "Welcoming Restaurant Atmosphere",
    category: "Ambience",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant warm dining atmosphere at Des Pardes Restaurant",
  },
  {
    id: "g6",
    title: "Fresh Tandoori Breads",
    category: "Tandoor",
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    alt: "Freshly baked tandoori naan and Pakistani bread selection",
  },
];
