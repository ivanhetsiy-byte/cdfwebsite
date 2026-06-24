import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const resend = getResendClient();

  if (!resend) {
    return NextResponse.json(
      {
        error:
          "Set RESEND_API_KEY in .env.local (replace re_xxxxxxxxx with your real API key).",
      },
      { status: 500 },
    );
  }

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ivanhetsiy@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  if (error) {
    return NextResponse.json({ error }, { status: 502 });
  }

  return NextResponse.json(data);
}
