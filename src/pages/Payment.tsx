import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Banknote, Smartphone, CreditCard } from 'lucide-react';
import { useEffect } from 'react';

const Payment = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, addOrder } = useCart();
  const { user, isStudent } = useAuth();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'upi' | 'card'>('cash');
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  useEffect(() => {
    if (!isStudent || cart.length === 0) {
      navigate('/menu');
    }
  }, [isStudent, cart, navigate]);

  const handlePayment = () => {
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);
    setShowOtpDialog(true);

    toast({
      title: 'OTP Sent! 📱',
      description: `Your OTP is: ${randomOtp}`,
    });
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      addOrder({
        studentName: user?.name || 'Student',
        items: cart,
        total: cartTotal,
        paymentMethod: paymentMethod === 'cash' ? 'Cash' : paymentMethod === 'upi' ? 'UPI' : 'Card',
      });

      setShowOtpDialog(false);
      navigate('/order-success');
    } else {
      toast({
        title: 'Invalid OTP',
        description: 'Please enter the correct OTP',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Payment 💳</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span className="text-primary">₹{cartTotal}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
            <div className="space-y-4">
              <Card
                className={`p-4 cursor-pointer transition-all ${
                  paymentMethod === 'cash' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setPaymentMethod('cash')}
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Banknote className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-bold">Cash 💵</div>
                      <div className="text-sm text-muted-foreground">Pay with cash on collection</div>
                    </div>
                  </Label>
                </div>
              </Card>

              <Card
                className={`p-4 cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-bold">UPI 📱</div>
                      <div className="text-sm text-muted-foreground">Pay using UPI apps</div>
                    </div>
                  </Label>
                </div>
              </Card>

              <Card
                className={`p-4 cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-bold">Card 💳</div>
                      <div className="text-sm text-muted-foreground">Pay using debit/credit card</div>
                    </div>
                  </Label>
                </div>
              </Card>
            </div>
          </RadioGroup>

          <Button className="w-full mt-8" size="lg" onClick={handlePayment}>
            Proceed to Pay ₹{cartTotal}
          </Button>
        </Card>
      </div>

      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter OTP 🔐</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-muted-foreground">
              We've sent a 4-digit OTP to verify your payment. Please enter it below.
            </p>
            <div className="space-y-2">
              <Label htmlFor="otp">OTP</Label>
              <Input
                id="otp"
                placeholder="Enter 4-digit OTP"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Demo OTP: {generatedOtp}
            </p>
            <Button className="w-full" onClick={handleVerifyOtp}>
              Verify & Place Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
