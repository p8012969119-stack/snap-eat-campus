import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Message Sent! 📧',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="gradient-warm text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us 📞</h1>
          <p className="text-xl opacity-90">
            We'd love to hear from you! Get in touch with us.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full gradient-warm flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      College Campus Canteen<br />
                      Main Building, Ground Floor<br />
                      Your College Name<br />
                      City, State - 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full gradient-warm flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Mon-Sat: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full gradient-warm flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      canteen@college.edu<br />
                      support@campuscanteen.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-warm text-white">
              <h2 className="text-2xl font-bold mb-4">Operating Hours ⏰</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
