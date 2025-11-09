import { Card } from '@/components/ui/card';
import { Lightbulb, ChefHat, Clock, Receipt } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="gradient-warm text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Campus Canteen Connect</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Revolutionizing campus dining through digital innovation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <Card className="p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Vision 💡</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Campus Canteen Connect is a digital canteen management system designed to make campus dining
            seamless, efficient, and convenient. We bridge the gap between students and canteen vendors,
            eliminating long queues and wait times while ensuring transparency in pricing and orders.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center card-hover">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Ordering</h3>
            <p className="text-muted-foreground">
              Order ahead and skip the queue with our intelligent ordering system
            </p>
          </Card>

          <Card className="p-6 text-center card-hover">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Food</h3>
            <p className="text-muted-foreground">
              Delicious, hygienic meals prepared by experienced chefs
            </p>
          </Card>

          <Card className="p-6 text-center card-hover">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Service</h3>
            <p className="text-muted-foreground">
              Real-time order tracking ensures your food is ready when you are
            </p>
          </Card>

          <Card className="p-6 text-center card-hover">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full gradient-warm mb-4">
              <Receipt className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Transparent Billing</h3>
            <p className="text-muted-foreground">
              Clear pricing with detailed order history and receipts
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Benefits for Students 🎓</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Save time by ordering in advance from anywhere on campus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Browse full menu with prices before placing orders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Track order status in real-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Multiple payment options for convenience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>View order history and manage preferences</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8 md:p-12 mt-6">
          <h2 className="text-3xl font-bold mb-6">Benefits for Vendors 🏪</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Streamlined order management system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Reduce queue congestion and wait times</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Better inventory planning with order insights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Digital payment tracking and records</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Improved customer satisfaction</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
