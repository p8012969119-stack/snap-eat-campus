import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import VendorLogin from "./pages/VendorLogin";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import StudentDashboard from "./pages/StudentDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<StudentLogin />} />
                  <Route path="/vendor-login" element={<VendorLogin />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/student-dashboard" element={<StudentDashboard />} />
                  <Route path="/vendor-dashboard" element={<VendorDashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
