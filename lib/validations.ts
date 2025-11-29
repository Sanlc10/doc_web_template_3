import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  serviceInterest: z.enum([
    "rheumatoid-arthritis",
    "osteoarthritis",
    "lupus",
    "psoriatic-arthritis",
    "gout",
    "osteoporosis",
    "vasculitis",
    "sjogrens",
    "other"
  ]),
  preferredContact: z.enum(["email", "phone"]),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
  consent: z.boolean().refine(val => val === true, "You must agree to be contacted"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
