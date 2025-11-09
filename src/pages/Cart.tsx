import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { isStudent } = useAuth();

  useEffect(() => {
    if (!isStudent) {
      navigate('/login');
    }
  }, [isStudent, navigate]);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some delicious items from our menu!
          </p>
          <Button onClick={() => navigate('/menu')} size="lg">
            Browse Menu 🍴
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/menu')} className="gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Button>
          <h1 className="text-4xl font-bold">Your Cart 🛒</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.category}</p>
                    <p className="text-lg font-bold text-primary">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-bold w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{cartTotal}</span>
                </div>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={() => navigate('/payment')}
              >
                Proceed to Payment 💳
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
