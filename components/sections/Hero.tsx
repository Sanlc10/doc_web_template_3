"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainerVariants, staggerItemVariants, floatVariants } from "@/lib/animations";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh">
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1, duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent/5 blur-3xl"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 2, duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={staggerItemVariants}>
              <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 px-4 py-2 text-sm">
                Board Certified Rheumatologist
              </Badge>
            </motion.div>

            <motion.h1
              variants={staggerItemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight"
            >
              Dr. Marco Lopez
            </motion.h1>

            <motion.h2
              variants={staggerItemVariants}
              className="text-2xl md:text-3xl font-body font-medium text-primary/80"
            >
              Expert Rheumatology Care
            </motion.h2>

            <motion.p
              variants={staggerItemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Compassionate, evidence-based treatment for arthritis, autoimmune conditions, and joint health. Dedicated to helping you live pain-free and active.
            </motion.p>

            <motion.div
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-white shadow-premium-lg group transition-all duration-300 hover:scale-105 hover:shadow-premium text-base px-8 py-6"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Doctor photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-2xl"></div>

              {/* Photo frame */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-premium-lg">
                <div className="aspect-square relative">
                  <Image
                    src="/assets/doc.png"
                    alt="Dr. Marco Lopez - Board-Certified Rheumatologist"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Accent decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-secondary/40 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
