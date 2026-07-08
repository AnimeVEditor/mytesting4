export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  category: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Taste & Flavour",
    rating: 5,
    text: "The chicken rolls here are absolutely legendary. The paratha is always perfectly crispy, and the filling is so generous. Park Street's best kept secret!",
    category: "Food Quality"
  },
  {
    id: "r2",
    name: "Value & Affordability",
    rating: 5,
    text: "Incredible value for money. I got two egg rolls and a cold drink for under ₹150. Tastes like it should cost three times as much.",
    category: "Price"
  },
  {
    id: "r3",
    name: "Freshness",
    rating: 5,
    text: "The freshness hits you immediately. The ingredients are clearly sourced fresh daily. The chutney they make in-house is something else!",
    category: "Ingredients"
  },
  {
    id: "r4",
    name: "Quick Service",
    rating: 4,
    text: "My order was ready in under 3 minutes. Hot, fresh, and exactly what I asked for. Perfect for a quick lunch or late-night craving.",
    category: "Service"
  },
  {
    id: "r5",
    name: "Family Experience",
    rating: 5,
    text: "Paneer tikka roll with extra cheese? Life-changing. The whole family loves this place — from the kids to the grandparents.",
    category: "Experience"
  },
  {
    id: "r6",
    name: "Authentic Taste",
    rating: 5,
    text: "The seekh kebabs are an absolute must-try. Charcoal-smoky, juicy, and served with the most amazing mint chutney. Outstanding.",
    category: "Food Quality"
  }
];