"use client";

import { MapPin, Clock, Phone, Mail, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

const officeInfo = [
  {
    icon: MapPin,
    label: "Office Location",
    value: "123 Medical Plaza, Suite 456",
    subvalue: "City, State 12345",
    action: "Get Directions",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday",
    subvalue: "9:00 AM - 5:00 PM",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    action: "Call Now",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "office@drmarcolopez.com",
    action: "Send Email",
    link: "mailto:office@drmarcolopez.com",
  },
  {
    icon: Shield,
    label: "Insurance",
    value: "Most major insurance accepted",
    subvalue: "Contact us to verify coverage",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 gradient-premium">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            overline="Get In Touch"
            title="Schedule Your Consultation"
            subtitle="Take the first step towards better joint health and pain-free living"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left column - Contact form */}
          <AnimatedSection delay={0.2}>
            <Card className="p-8 shadow-premium-lg border-border/50 bg-card">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Request an Appointment
              </h3>
              <ContactForm />
            </Card>
          </AnimatedSection>

          {/* Right column - Office information */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                  Office Information
                </h3>
                <div className="space-y-4">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="p-6 hover:shadow-premium transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="text-lg font-semibold text-primary">
                              {info.value}
                            </p>
                            {info.subvalue && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {info.subvalue}
                              </p>
                            )}
                            {info.action && info.link && (
                              <a
                                href={info.link}
                                className="text-sm text-secondary hover:text-secondary/80 font-medium mt-2 inline-block transition-colors"
                              >
                                {info.action} →
                              </a>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="p-4 border-border/50 bg-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Interactive map will be displayed here
                    </p>
                  </div>
                </div>
              </Card>

              {/* Additional info */}
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h4 className="font-heading font-semibold text-primary mb-3">
                  New Patients Welcome
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We are currently accepting new patients. Same-day and next-day appointments
                  often available for urgent concerns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-full text-xs font-medium text-primary">
                    Telehealth Available
                  </span>
                  <span className="px-3 py-1 bg-background rounded-full text-xs font-medium text-primary">
                    Wheelchair Accessible
                  </span>
                  <span className="px-3 py-1 bg-background rounded-full text-xs font-medium text-primary">
                    Free Parking
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
