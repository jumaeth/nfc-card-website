import { NextResponse } from "next/server";
import { sendSalesEmail } from "@/lib/email";

// Contact form submissions land here and are emailed to the sales inbox.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name).slice(0, 200);
  const email = str(body.email).slice(0, 200);
  const company = str(body.company).slice(0, 200);
  const phone = str(body.phone).slice(0, 100);
  const message = str(body.message).slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const text = [
    "New contact enquiry from taplino.ch",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    ...(company ? [`Company: ${company}`] : []),
    ...(phone ? [`Phone: ${phone}`] : []),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await sendSalesEmail({
      subject: `Contact enquiry: ${name}`,
      text,
      replyTo: email,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ error: "Could not send your message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
