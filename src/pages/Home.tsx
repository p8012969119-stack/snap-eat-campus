import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Store, Pizza, Coffee, IceCream, Salad } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const { isStudent, isVendor } = useAuth();

  useEffect(() => {
    if (isStudent) {
      navigate('/menu');
    } else if (isVendor) {
      navigate('/vendor-dashboard');
    }
  }, [isStudent, isVendor, navigate]);

  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden gradient-warm">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 floating-animation">
            <Pizza className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-20 right-20 floating-animation" style={{ animationDelay: '0.5s' }}>
            <Coffee className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 floating-animation" style={{ animationDelay: '1s' }}>
            <IceCream className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/3 floating-animation" style={{ animationDelay: '1.5s' }}>
            <Salad className="h-16 w-16 text-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Campus Canteen Connect 🍽️
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Order delicious food from your college canteen digitally. Fast, easy, and convenient!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Card className="w-full sm:w-80 p-8 card-hover cursor-pointer" onClick={() => navigate('/login')}>
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Student Portal</h3>
              <p className="text-muted-foreground mb-6">
                Browse menu, order food, and track your orders
              </p>
              <Button className="w-full" size="lg">
                Enter as Student 🎓
              </Button>
            </Card>

            <Card className="w-full sm:w-80 p-8 card-hover cursor-pointer" onClick={() => navigate('/vendor-login')}>
              <Store className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Shop Portal</h3>
              <p className="text-muted-foreground mb-6">
                Manage orders and track canteen operations
              </p>
              <Button className="w-full" size="lg" variant="secondary">
                Enter as Vendor 🏪
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Campus Canteen Connect?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-muted-foreground">
                Order in advance and skip the queue. Get your food ready when you arrive!
              </p>
            </Card>
            <Card className="p-6 text-center card-hover">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                See exact prices, no hidden charges. Know what you're paying before you order!
              </p>
            </Card>
            <Card className="p-6 text-center card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Digital Convenience</h3>
              <p className="text-muted-foreground">
                Order from anywhere on campus. Track your order status in real-time!
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
