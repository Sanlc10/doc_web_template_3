import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const validated = contactFormSchema.parse(body);

    // Log the submission (in production, you would send an email or save to database)
    console.log("Contact form submission:", {
      name: `${validated.firstName} ${validated.lastName}`,
      email: validated.email,
      phone: validated.phone,
      service: validated.serviceInterest,
      preferredContact: validated.preferredContact,
      message: validated.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, implement one of these:
    // 1. Send email notification using SendGrid, Resend, or Nodemailer
    // 2. Save to database (Prisma, MongoDB, etc.)
    // 3. Integrate with practice management system
    // 4. Send to Zapier webhook or similar automation

    // For now, just return success
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll be in touch soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
