import { NextResponse } from "next/server";
import { sendSalesEmail } from "@/lib/email";

// Card orders placed in the editor are emailed to the sales inbox. The editor
// builds the human-readable specification client-side and posts it here; the
// recipient is always sales@taplino.ch, set server-side.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const subject = str(body.subject).slice(0, 300);
  const text = str(body.text).slice(0, 20000);
  const replyTo = str(body.replyTo).slice(0, 200) || undefined;

  if (!subject || !text) {
    return NextResponse.json({ error: "Missing order details" }, { status: 400 });
  }

  try {
    await sendSalesEmail({
      subject,
      text,
      replyTo: replyTo && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(replyTo) ? replyTo : undefined,
    });
  } catch (err) {
    console.error("Failed to send order email:", err);
    return NextResponse.json({ error: "Could not place your order" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
