// Server-only email sending via Resend. Used by the contact form and the card
// order flow, both of which notify our sales inbox.
//
// Configure with environment variables (see .env.example):
//   RESEND_API_KEY   the Resend API key (required to actually send)
//   SALES_EMAIL      inbox that receives enquiries (default sales@taplino.ch)
//   RESEND_FROM      verified sender address (default noreply@taplino.ch)
//
// This module is only imported from route handlers, which always run on the
// server, so the Resend API key never reaches the client bundle.
import { Resend } from "resend";

const SALES_EMAIL = process.env.SALES_EMAIL || "sales@taplino.ch";
const FROM_EMAIL = process.env.RESEND_FROM || "Taplino <noreply@taplino.ch>";

// Send a plain-text notification to the sales inbox. The recipient is always
// server-controlled, so callers can only reach sales@taplino.ch, never an
// arbitrary address. `replyTo` lets us reply straight to the customer.
export async function sendSalesEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: SALES_EMAIL,
    subject,
    text,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send the email");
  }
  return data;
}
