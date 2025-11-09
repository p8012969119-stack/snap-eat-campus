import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-primary mb-2">Campus Canteen Connect</h3>
            <p className="text-sm text-muted-foreground">
              © 2025 Your College Name. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="mailto:canteen@college.edu"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
