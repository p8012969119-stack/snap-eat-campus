import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { menuItems, categories } from '@/data/menuData';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { useEffect } from 'react';

const Menu = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const { isStudent } = useAuth();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    if (!isStudent) {
      navigate('/login');
    }
  }, [isStudent, navigate]);

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image,
    });

    toast({
      title: 'Added to Cart! 🛒',
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="gradient-warm text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Menu 🍴</h1>
          <p className="text-lg opacity-90">
            Browse our delicious offerings and order your favorites!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-6">
        <Card className="p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="gap-2"
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden card-hover">
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <Badge className="mb-4" variant="secondary">
                  {categories.find((c) => c.id === item.category)?.name}
                </Badge>
                <Button
                  className="w-full gap-2"
                  onClick={() => handleAddToCart(item)}
                >
                  <Plus className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {cartCount > 0 && (
        <div className="fixed bottom-8 right-8">
          <Button
            size="lg"
            className="rounded-full h-16 w-16 shadow-lg badge-glow"
            onClick={() => navigate('/cart')}
          >
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                {cartCount}
              </Badge>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
