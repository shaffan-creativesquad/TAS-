import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { cn, em, pn, msg } = body;

  if (!em) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "The Author Success <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: em,
    subject: `New Landing Page Lead${cn ? ` - ${cn}` : ""}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h2 style="color:#E02D2D;border-bottom:2px solid #E02D2D;padding-bottom:10px">New Landing Page Submission</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr style="background:#f8fafc"><td style="padding:10px;font-weight:bold;width:140px">Name</td><td style="padding:10px">${cn || "Not provided"}</td></tr>
          <tr><td style="padding:10px;font-weight:bold">Email</td><td style="padding:10px"><a href="mailto:${em}">${em}</a></td></tr>
          <tr style="background:#f8fafc"><td style="padding:10px;font-weight:bold">Phone</td><td style="padding:10px">${pn || "Not provided"}</td></tr>
          <tr><td style="padding:10px;font-weight:bold;vertical-align:top">Message</td><td style="padding:10px">${msg || "No message provided"}</td></tr>
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
