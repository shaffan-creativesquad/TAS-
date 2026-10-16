import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "The Author Success <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `New Consultation Request${service ? ` - ${service}` : ""}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h2 style="color:#0891b2;border-bottom:2px solid #0891b2;padding-bottom:10px">New Homepage Consultation Request</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr style="background:#f8fafc"><td style="padding:10px;font-weight:bold;width:140px">Name</td><td style="padding:10px">${name}</td></tr>
          <tr><td style="padding:10px;font-weight:bold">Email</td><td style="padding:10px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f8fafc"><td style="padding:10px;font-weight:bold">Service</td><td style="padding:10px">${service || "Not selected"}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
