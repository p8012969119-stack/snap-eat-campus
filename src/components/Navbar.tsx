import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, ShoppingCart, User, Info, Phone, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const { user, vendor, logout, isStudent, isVendor } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <UtensilsCrossed className="h-6 w-6" />
            <span className="hidden sm:inline">Campus Canteen Connect</span>
            <span className="sm:hidden">CCC</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
              <Button
                variant={isActive('/') ? 'default' : 'ghost'}
                size="sm"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>

            {isStudent && (
              <Link to="/menu">
                <Button
                  variant={isActive('/menu') ? 'default' : 'ghost'}
                  size="sm"
                  className="gap-2"
                >
                  <UtensilsCrossed className="h-4 w-4" />
                  <span className="hidden sm:inline">Menu</span>
                </Button>
              </Link>
            )}

            <Link to="/about">
              <Button
                variant={isActive('/about') ? 'default' : 'ghost'}
                size="sm"
                className="gap-2"
              >
                <Info className="h-4 w-4" />
                <span className="hidden md:inline">About</span>
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant={isActive('/contact') ? 'default' : 'ghost'}
                size="sm"
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Contact</span>
              </Button>
            </Link>

            {isStudent && (
              <Link to="/cart" className="relative">
                <Button
                  variant={isActive('/cart') ? 'default' : 'ghost'}
                  size="sm"
                  className="gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">Cart</span>
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 badge-glow">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}

            {(isStudent || isVendor) && (
              <div className="flex items-center gap-2">
                <Link to={isStudent ? '/student-dashboard' : '/vendor-dashboard'}>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {isStudent ? user?.name : vendor?.name}
                    </span>
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}

            {!isStudent && !isVendor && (
              <Link to="/login">
                <Button variant="default" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
