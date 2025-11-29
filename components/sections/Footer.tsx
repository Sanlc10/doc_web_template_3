import { Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About column */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Dr. Marco Lopez
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Board-certified rheumatologist providing comprehensive,
              compassionate care for arthritis and autoimmune conditions.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Board Certified by the American Board of Internal Medicine
            </p>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Rheumatoid Arthritis</li>
              <li>Osteoarthritis</li>
              <li>Lupus (SLE)</li>
              <li>Psoriatic Arthritis</li>
              <li>Gout Management</li>
              <li>Osteoporosis</li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <p className="text-sm text-primary-foreground/60">Phone</p>
                <a href="tel:+15551234567" className="hover:text-secondary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <p className="text-sm text-primary-foreground/60">Email</p>
                <a href="mailto:office@drmarcolopez.com" className="hover:text-secondary transition-colors">
                  office@drmarcolopez.com
                </a>
              </li>
              <li>
                <p className="text-sm text-primary-foreground/60">Address</p>
                <p>123 Medical Plaza, Suite 456</p>
                <p>City, State 12345</p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              HIPAA Notice
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Patient Rights
            </a>
          </div>

          <div className="flex items-center gap-2">
            <p>© {currentYear} Dr. Marco Lopez, MD</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50 flex items-center justify-center gap-2">
            Built with <Heart className="h-3 w-3 fill-secondary text-secondary" /> for better patient care
          </p>
        </div>
      </div>
    </footer>
  );
}
