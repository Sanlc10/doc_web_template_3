"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 rounded-lg bg-accent/10 border border-accent/20 text-center">
        <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          Your message has been received. We'll contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className={errors.firstName ? "border-destructive" : ""}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className={errors.lastName ? "border-destructive" : ""}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email and phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service interest */}
      <div className="space-y-2">
        <Label htmlFor="serviceInterest">Service of Interest *</Label>
        <select
          id="serviceInterest"
          {...register("serviceInterest")}
          className={`flex h-10 w-full rounded-md border ${errors.serviceInterest ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
        >
          <option value="">Select a service</option>
          <option value="rheumatoid-arthritis">Rheumatoid Arthritis</option>
          <option value="osteoarthritis">Osteoarthritis</option>
          <option value="lupus">Lupus (SLE)</option>
          <option value="psoriatic-arthritis">Psoriatic Arthritis</option>
          <option value="gout">Gout Management</option>
          <option value="osteoporosis">Osteoporosis</option>
          <option value="vasculitis">Vasculitis</option>
          <option value="sjogrens">Sjögren's Syndrome</option>
          <option value="other">Other</option>
        </select>
        {errors.serviceInterest && (
          <p className="text-sm text-destructive">{errors.serviceInterest.message}</p>
        )}
      </div>

      {/* Preferred contact method */}
      <div className="space-y-2">
        <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
        <select
          id="preferredContact"
          {...register("preferredContact")}
          className={`flex h-10 w-full rounded-md border ${errors.preferredContact ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
        >
          <option value="">Select preference</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        {errors.preferredContact && (
          <p className="text-sm text-destructive">{errors.preferredContact.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
          placeholder="Tell us about your condition and how we can help..."
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          {...register("consent")}
          className="mt-1"
        />
        <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
          I consent to being contacted by Dr. Marco Lopez's office regarding my inquiry. *
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-premium py-6 text-base font-medium"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Schedule Consultation"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * Required fields
      </p>
    </form>
  );
}
