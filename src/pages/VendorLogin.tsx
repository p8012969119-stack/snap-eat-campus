import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Store, User, Key } from 'lucide-react';

const VendorLogin = () => {
  const navigate = useNavigate();
  const { loginVendor } = useAuth();
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({ vendorId: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo vendor login
    if (loginData.vendorId && loginData.password) {
      loginVendor({
        vendorId: loginData.vendorId,
        name: 'Canteen Manager',
      });
      
      toast({
        title: 'Welcome! 👋',
        description: 'Successfully logged in as vendor',
      });
      
      navigate('/vendor-dashboard');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Please enter valid credentials',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-cream">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
            <Store className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Vendor Portal</h1>
          <p className="text-muted-foreground">Manage your canteen operations</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="vendor-id">Vendor ID</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="vendor-id"
                placeholder="VEN001"
                className="pl-10"
                value={loginData.vendorId}
                onChange={(e) => setLoginData({ ...loginData, vendorId: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-password">Password</Label>
            <div className="relative">
              <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="vendor-password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Login as Vendor 🏪
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Demo credentials: Use any vendor ID and password
          </p>
        </div>
      </Card>
    </div>
  );
};

export default VendorLogin;
