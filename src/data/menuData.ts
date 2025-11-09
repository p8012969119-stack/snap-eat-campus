export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'veg' | 'non-veg' | 'snacks' | 'juice' | 'cake';
  rating: number;
  image: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // Veg Meals
  {
    id: 'veg-1',
    name: 'Veg Thali',
    price: 80,
    category: 'veg',
    rating: 4.5,
    image: '🍛',
    description: 'Complete meal with rice, dal, sabzi, roti, and salad',
  },
  {
    id: 'veg-2',
    name: 'Paneer Butter Masala',
    price: 120,
    category: 'veg',
    rating: 4.8,
    image: '🍲',
    description: 'Creamy paneer curry with butter naan',
  },
  {
    id: 'veg-3',
    name: 'Chole Bhature',
    price: 70,
    category: 'veg',
    rating: 4.6,
    image: '🥙',
    description: 'Spicy chickpeas with fried bread',
  },
  {
    id: 'veg-4',
    name: 'Veg Biryani',
    price: 90,
    category: 'veg',
    rating: 4.4,
    image: '🍚',
    description: 'Aromatic rice with mixed vegetables',
  },

  // Non-Veg Meals
  {
    id: 'non-veg-1',
    name: 'Chicken Biryani',
    price: 150,
    category: 'non-veg',
    rating: 4.9,
    image: '🍗',
    description: 'Aromatic basmati rice with tender chicken',
  },
  {
    id: 'non-veg-2',
    name: 'Egg Curry Rice',
    price: 100,
    category: 'non-veg',
    rating: 4.3,
    image: '🥚',
    description: 'Boiled eggs in spicy curry with rice',
  },
  {
    id: 'non-veg-3',
    name: 'Chicken Fried Rice',
    price: 130,
    category: 'non-veg',
    rating: 4.5,
    image: '🍛',
    description: 'Indo-Chinese style fried rice with chicken',
  },
  {
    id: 'non-veg-4',
    name: 'Fish Fry Meal',
    price: 140,
    category: 'non-veg',
    rating: 4.6,
    image: '🐟',
    description: 'Crispy fried fish with rice and curry',
  },

  // Snacks
  {
    id: 'snack-1',
    name: 'Samosa',
    price: 20,
    category: 'snacks',
    rating: 4.7,
    image: '🥟',
    description: 'Crispy fried pastry with potato filling',
  },
  {
    id: 'snack-2',
    name: 'Vada Pav',
    price: 25,
    category: 'snacks',
    rating: 4.5,
    image: '🍔',
    description: 'Mumbai street food - potato fritter in bun',
  },
  {
    id: 'snack-3',
    name: 'French Fries',
    price: 40,
    category: 'snacks',
    rating: 4.4,
    image: '🍟',
    description: 'Crispy golden fries with ketchup',
  },
  {
    id: 'snack-4',
    name: 'Sandwich',
    price: 50,
    category: 'snacks',
    rating: 4.3,
    image: '🥪',
    description: 'Grilled vegetable sandwich',
  },
  {
    id: 'snack-5',
    name: 'Pakoda',
    price: 30,
    category: 'snacks',
    rating: 4.6,
    image: '🧆',
    description: 'Mixed vegetable fritters',
  },

  // Fresh Juices
  {
    id: 'juice-1',
    name: 'Mango Juice',
    price: 40,
    category: 'juice',
    rating: 4.8,
    image: '🥭',
    description: 'Fresh mango juice',
  },
  {
    id: 'juice-2',
    name: 'Orange Juice',
    price: 35,
    category: 'juice',
    rating: 4.5,
    image: '🍊',
    description: 'Freshly squeezed orange juice',
  },
  {
    id: 'juice-3',
    name: 'Watermelon Juice',
    price: 30,
    category: 'juice',
    rating: 4.4,
    image: '🍉',
    description: 'Refreshing watermelon juice',
  },
  {
    id: 'juice-4',
    name: 'Mixed Fruit Juice',
    price: 50,
    category: 'juice',
    rating: 4.7,
    image: '🧃',
    description: 'Blend of seasonal fruits',
  },

  // Cakes
  {
    id: 'cake-1',
    name: 'Chocolate Cake',
    price: 60,
    category: 'cake',
    rating: 4.9,
    image: '🍰',
    description: 'Rich chocolate cake slice',
  },
  {
    id: 'cake-2',
    name: 'Vanilla Pastry',
    price: 45,
    category: 'cake',
    rating: 4.6,
    image: '🧁',
    description: 'Soft vanilla pastry',
  },
  {
    id: 'cake-3',
    name: 'Black Forest',
    price: 70,
    category: 'cake',
    rating: 4.8,
    image: '🎂',
    description: 'Classic black forest cake',
  },
  {
    id: 'cake-4',
    name: 'Brownie',
    price: 50,
    category: 'cake',
    rating: 4.7,
    image: '🍫',
    description: 'Fudgy chocolate brownie',
  },
];

export const categories = [
  { id: 'veg', name: 'Veg Meals', icon: '🥗', color: 'veg' },
  { id: 'non-veg', name: 'Non-Veg Meals', icon: '🍗', color: 'non-veg' },
  { id: 'snacks', name: 'Snacks', icon: '🍟', color: 'snacks' },
  { id: 'juice', name: 'Fresh Juices', icon: '🧃', color: 'juice' },
  { id: 'cake', name: 'Cakes', icon: '🍰', color: 'cake' },
];
