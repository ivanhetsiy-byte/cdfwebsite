import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { validateContactForm, hasFieldErrors } from "@/lib/contact-validation";
import { buildContactSubmissionEmail } from "@/lib/contact-email-template";

type ContactPayload = {
  parentFirstName?: unknown;
  parentLastName?: unknown;
  contactNumber?: unknown;
  email?: unknown;
  childFirstName?: unknown;
  childLastName?: unknown;
  age?: unknown;
  gender?: unknown;
  previousExperience?: unknown;
  medicalConditions?: unknown;
  message?: unknown;
};

function parseString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parseContactPayload(body: ContactPayload) {
  const parentFirstName = parseString(body.parentFirstName, 50);
  const parentLastName = parseString(body.parentLastName, 50);
  const contactNumber = parseString(body.contactNumber, 30);
  const email = parseString(body.email, 254);
  const childFirstName = parseString(body.childFirstName, 50);
  const childLastName = parseString(body.childLastName, 50);
  const age = parseString(body.age, 10);
  const gender =
    body.gender === "male" || body.gender === "female" ? body.gender : "";
  const previousExperience = parseString(body.previousExperience, 2000);
  const medicalConditions = parseString(body.medicalConditions, 2000);
  const message = parseString(body.message, 5000);

  const errors = validateContactForm({
    parentFirstName,
    parentLastName,
    contactNumber,
    email,
    childFirstName,
    childLastName,
    age,
    gender,
    previousExperience,
    medicalConditions,
    message,
  });

  if (hasFieldErrors(errors)) {
    const firstError = Object.values(errors)[0];
    return { error: firstError ?? "Please check your form and try again." } as const;
  }

  return {
    parentFirstName,
    parentLastName,
    contactNumber,
    email,
    childFirstName,
    childLastName,
    age,
    gender,
    previousExperience,
    medicalConditions,
    message,
  } as const;
}

export async function POST(request: Request) {
  const resend = getResendClient();
  const to = process.env.CONTACT_FORM_TO;
  const from = process.env.CONTACT_FORM_FROM;

  if (!resend || !to || !from) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = parseContactPayload(body);

  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const parentName = `${parsed.parentFirstName} ${parsed.parentLastName}`;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: parsed.email,
    subject: `CDF Contact Form — ${parentName}`,
    html: buildContactSubmissionEmail(parsed),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
