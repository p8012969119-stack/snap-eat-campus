import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingBag, Clock, CheckCircle, Utensils } from 'lucide-react';
import { useEffect } from 'react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { orders } = useCart();
  const { user, isStudent } = useAuth();

  useEffect(() => {
    if (!isStudent) {
      navigate('/login');
    }
  }, [isStudent, navigate]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'accepted':
        return <Utensils className="h-5 w-5 text-blue-500" />;
      case 'ready':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'accepted':
        return 'Preparing';
      case 'ready':
        return 'Ready to Collect';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name}! 👋</h1>
          <p className="text-muted-foreground">Track all your orders here</p>
        </div>

        {orders.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
            <p className="text-muted-foreground mb-6">Start ordering delicious food from our menu!</p>
            <Button onClick={() => navigate('/menu')} size="lg">
              Browse Menu 🍴
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">Order {order.id}</h3>
                      <Badge
                        variant={
                          order.status === 'ready'
                            ? 'default'
                            : order.status === 'accepted'
                            ? 'secondary'
                            : 'outline'
                        }
                        className="gap-2"
                      >
                        {getStatusIcon(order.status)}
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">₹{order.total}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold mb-3">Items:</h4>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.image}</span>
                          <span>
                            {item.name} x {item.quantity}
                          </span>
                        </div>
                        <span className="font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Payment Method</span>
                    <span className="font-medium">{order.paymentMethod}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
