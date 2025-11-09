import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, CheckCircle, User, Utensils } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const VendorDashboard = () => {
  const navigate = useNavigate();
  const { orders, updateOrderStatus } = useCart();
  const { isVendor } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isVendor) {
      navigate('/vendor-login');
    }
  }, [isVendor, navigate]);

  const handleAcceptOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'accepted');
    toast({
      title: 'Order Accepted ✅',
      description: 'Order has been accepted and is being prepared',
    });
  };

  const handleMarkReady = (orderId: string) => {
    updateOrderStatus(orderId, 'ready');
    toast({
      title: 'Order Ready! 🎉',
      description: 'Student has been notified to collect the order',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'border-l-4 border-l-destructive';
      case 'accepted':
        return 'border-l-4 border-l-yellow-500';
      case 'ready':
        return 'border-l-4 border-l-green-500';
      default:
        return 'border-l-4 border-l-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Vendor Dashboard 🏪</h1>
          <p className="text-muted-foreground">Manage all incoming orders</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">New Orders</p>
                <p className="text-3xl font-bold text-destructive">
                  {orders.filter((o) => o.status === 'pending').length}
                </p>
              </div>
              <Clock className="h-12 w-12 text-destructive" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Preparing</p>
                <p className="text-3xl font-bold text-yellow-500">
                  {orders.filter((o) => o.status === 'accepted').length}
                </p>
              </div>
              <Utensils className="h-12 w-12 text-yellow-500" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Ready</p>
                <p className="text-3xl font-bold text-green-500">
                  {orders.filter((o) => o.status === 'ready').length}
                </p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
          </Card>
        </div>

        {orders.length === 0 ? (
          <Card className="p-12 text-center">
            <Utensils className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
            <p className="text-muted-foreground">Orders will appear here when students place them</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders
              .filter((order) => order.status !== 'completed')
              .map((order) => (
                <Card key={order.id} className={`p-6 ${getStatusColor(order.status)}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">Order {order.id}</h3>
                        <Badge
                          variant={
                            order.status === 'pending'
                              ? 'destructive'
                              : order.status === 'ready'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {order.status === 'pending' && '🔴 New'}
                          {order.status === 'accepted' && '🟡 Preparing'}
                          {order.status === 'ready' && '🟢 Ready'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{order.studentName}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{new Date(order.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-primary">₹{order.total}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
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

                  <div className="flex gap-3">
                    {order.status === 'pending' && (
                      <Button
                        className="flex-1"
                        onClick={() => handleAcceptOrder(order.id)}
                      >
                        ✅ Accept Order
                      </Button>
                    )}
                    {order.status === 'accepted' && (
                      <Button
                        className="flex-1"
                        onClick={() => handleMarkReady(order.id)}
                      >
                        🕒 Mark as Ready
                      </Button>
                    )}
                    {order.status === 'ready' && (
                      <div className="flex-1 text-center py-2 bg-success/10 text-success rounded-lg font-medium">
                        ✅ Ready for Collection
                      </div>
                    )}
                  </div>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;
