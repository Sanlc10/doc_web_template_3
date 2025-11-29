"use client";

import { GraduationCap, Award, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const credentials = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "MD, Internal Medicine",
    details: "Top-tier medical school with honors",
  },
  {
    icon: Award,
    label: "Fellowship",
    value: "Rheumatology",
    details: "Advanced training in autoimmune diseases",
  },
  {
    icon: Shield,
    label: "Board Certified",
    value: "Rheumatology",
    details: "American Board of Internal Medicine",
  },
  {
    icon: Clock,
    label: "Experience",
    value: "15+ Years",
    details: "Treating complex rheumatic diseases",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 gradient-premium">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            overline="About Dr. Lopez"
            title="Dedicated to Your Joint Health"
            subtitle="Board-certified rheumatologist with extensive experience in treating autoimmune and inflammatory conditions"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* Left column - Biography */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Dr. Marco Lopez is a board-certified rheumatologist dedicated to providing comprehensive,
                compassionate care for patients with arthritis, autoimmune diseases, and musculoskeletal conditions.
              </p>
              <p>
                With over 15 years of experience, Dr. Lopez combines evidence-based medicine with a personalized
                approach to help each patient achieve their best quality of life. He stays at the forefront of
                rheumatology through continuous education and research, ensuring his patients benefit from the
                latest treatment advances.
              </p>
              <p>
                Dr. Lopez believes in empowering patients through education and shared decision-making. He takes
                the time to listen, explain conditions clearly, and develop treatment plans tailored to each
                individual's needs and lifestyle.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 italic text-primary mt-8">
                "My goal is to help every patient live pain-free and pursue the activities they love.
                Together, we'll find the right treatment path for you."
                <footer className="text-sm text-muted-foreground mt-2 not-italic">— Dr. Marco Lopez</footer>
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Right column - Credentials grid */}
          <AnimatedSection delay={0.4}>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <motion.div key={index} variants={staggerItemVariants}>
                    <Card className="p-6 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm group">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {credential.label}
                          </p>
                          <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                            {credential.value}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {credential.details}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
