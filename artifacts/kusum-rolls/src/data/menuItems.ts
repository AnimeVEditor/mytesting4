export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  badge?: string;
}

import chickenRollImg from '../assets/chicken-roll.jpg';
import eggRollImg from '../assets/egg-roll.jpg';
import vegRollImg from '../assets/veg-roll.jpg';
import paneerRollImg from '../assets/paneer-roll.jpg';
import chickenKebabImg from '../assets/chicken-kebab.jpg';

export const categories = [
  "All",
  "Chicken Rolls",
  "Egg Rolls",
  "Veg Rolls",
  "Paneer Rolls",
  "Double Egg Rolls",
  "Kebabs",
  "Snacks",
  "Cold Drinks"
];

export const menuItems: MenuItem[] = [
  // Chicken Rolls
  {
    id: "cr-1",
    name: "Chicken Roll",
    description: "Juicy grilled chicken strips in a crispy paratha with tangy chutney",
    price: 80,
    category: "Chicken Rolls",
    image: chickenRollImg,
    badge: "Bestseller"
  },
  {
    id: "cr-2",
    name: "Chicken Double Roll",
    description: "Extra-loaded chicken roll with double stuffing",
    price: 120,
    category: "Chicken Rolls",
    image: chickenRollImg
  },
  {
    id: "cr-3",
    name: "Spicy Chicken Roll",
    description: "Fiery hot chicken roll with extra green chilies",
    price: 90,
    category: "Chicken Rolls",
    image: chickenRollImg,
    badge: "Spicy"
  },
  
  // Egg Rolls
  {
    id: "er-1",
    name: "Egg Roll",
    description: "Classic egg paratha roll with onions and kasundi mustard sauce",
    price: 50,
    category: "Egg Rolls",
    image: eggRollImg,
    badge: "Classic"
  },
  {
    id: "er-2",
    name: "Egg Chicken Roll",
    description: "Perfect combo of egg and chicken in one roll",
    price: 90,
    category: "Egg Rolls",
    image: eggRollImg
  },
  {
    id: "er-3",
    name: "Egg Cheese Roll",
    description: "Creamy melted cheese with egg roll",
    price: 70,
    category: "Egg Rolls",
    image: eggRollImg
  },

  // Veg Rolls
  {
    id: "vr-1",
    name: "Veg Roll",
    description: "Fresh seasonal vegetables with paneer in a soft paratha",
    price: 50,
    category: "Veg Rolls",
    image: vegRollImg
  },
  {
    id: "vr-2",
    name: "Aloo Roll",
    description: "Spiced potato filling with green chutney",
    price: 40,
    category: "Veg Rolls",
    image: vegRollImg
  },
  {
    id: "vr-3",
    name: "Mixed Veg Roll",
    description: "Garden-fresh veggies and house spice blend",
    price: 60,
    category: "Veg Rolls",
    image: vegRollImg
  },

  // Paneer Rolls
  {
    id: "pr-1",
    name: "Paneer Tikka Roll",
    description: "Smoky grilled paneer with onions in a crispy paratha",
    price: 90,
    category: "Paneer Rolls",
    image: paneerRollImg,
    badge: "Must Try"
  },
  {
    id: "pr-2",
    name: "Paneer Cheese Roll",
    description: "Double the indulgence — paneer and melted cheese",
    price: 110,
    category: "Paneer Rolls",
    image: paneerRollImg
  },

  // Double Egg Rolls
  {
    id: "der-1",
    name: "Double Egg Roll",
    description: "Two eggs, double the flavour, classic street style",
    price: 70,
    category: "Double Egg Rolls",
    image: eggRollImg
  },
  {
    id: "der-2",
    name: "Double Egg Chicken Roll",
    description: "Two eggs with chicken for the big appetite",
    price: 110,
    category: "Double Egg Rolls",
    image: eggRollImg
  },

  // Kebabs
  {
    id: "k-1",
    name: "Seekh Kebab",
    description: "Minced chicken seekh kebab, charcoal-grilled to perfection",
    price: 120,
    category: "Kebabs",
    image: chickenKebabImg,
    badge: "Chef's Pick"
  },
  {
    id: "k-2",
    name: "Chicken Tikka Kebab",
    description: "Marinated chicken tikka pieces, tender and smoky",
    price: 150,
    category: "Kebabs",
    image: chickenKebabImg
  },

  // Snacks
  {
    id: "sn-1",
    name: "Chicken Cutlet",
    description: "Crispy golden chicken cutlet",
    price: 60,
    category: "Snacks"
  },
  {
    id: "sn-2",
    name: "Fish Fry",
    description: "Spiced batter-fried fish, Kolkata style",
    price: 80,
    category: "Snacks"
  },
  {
    id: "sn-3",
    name: "Egg Devil",
    description: "Hard-boiled egg coated in spiced minced meat, deep-fried",
    price: 50,
    category: "Snacks"
  },

  // Cold Drinks
  {
    id: "cd-1",
    name: "Thums Up / Pepsi / Sprite",
    description: "Refreshing cold beverages",
    price: 30,
    category: "Cold Drinks"
  },
  {
    id: "cd-2",
    name: "Lemonade",
    description: "Freshly squeezed lime with masala",
    price: 40,
    category: "Cold Drinks"
  },
  {
    id: "cd-3",
    name: "Mango Frooti",
    description: "Sweet mango drink",
    price: 30,
    category: "Cold Drinks"
  }
];