import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { orders } = useCart();
  const [showConfetti, setShowConfetti] = useState(true);

  const latestOrder = orders[0];

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!latestOrder) {
    navigate('/menu');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-cream relative overflow-hidden">
      {showConfetti && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </>
      )}

      <Card className="w-full max-w-2xl p-12 text-center relative z-10">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-success text-white mb-6 mx-auto">
          <CheckCircle className="h-12 w-12" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Order Confirmed! 🎉</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your order has been successfully placed
        </p>

        <Card className="p-6 mb-8 bg-secondary/30">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order ID</p>
              <p className="font-bold text-lg">{latestOrder.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
              <p className="font-bold text-lg text-primary">₹{latestOrder.total}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
              <p className="font-bold">{latestOrder.paymentMethod}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Estimated Time</p>
              <p className="font-bold">15-20 mins</p>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            className="w-full gap-2"
            size="lg"
            onClick={() => navigate('/student-dashboard')}
          >
            <Sparkles className="h-4 w-4" />
            View My Orders
          </Button>
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={() => navigate('/menu')}
          >
            Order More Food 🍴
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderSuccess;
