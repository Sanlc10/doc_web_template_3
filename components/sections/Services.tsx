"use client";

import { Activity, Bone, Heart, Droplet, Zap, Shield, GitBranch, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { services } from "@/config/services";

const iconMap: { [key: string]: any } = {
  Activity,
  Bone,
  Heart,
  Droplet,
  Zap,
  Shield,
  GitBranch,
  Eye,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            overline="Comprehensive Care"
            title="Rheumatology Services"
            subtitle="Expert treatment for a wide range of rheumatic and autoimmune conditions"
          />
        </AnimatedSection>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <motion.div key={service.id} variants={staggerItemVariants}>
                <Card className="p-8 h-full hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card group relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA section */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-muted/50 backdrop-blur-sm">
              <p className="text-muted-foreground">
                Don't see your condition listed?
              </p>
              <Badge variant="secondary" className="px-4 py-1">
                We treat many more conditions
              </Badge>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
