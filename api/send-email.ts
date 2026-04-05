import { Resend } from "resend";

// Vercel handles server-side environment variables via process.env
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { senderEmail, senderName, message } = req.body;

    // Server-side Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!senderEmail || !emailRegex.test(senderEmail)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    if (!message || message.length > 5000) {
      return res.status(400).json({ error: "Message too long or missing." });
    }

    // Call Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.VITE_CONTACT_EMAIL as string,
      subject: `New Message from ${senderName}`,
      replyTo: senderEmail,
      text: `Message from: ${senderEmail}\n\n${message}`,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data });
  } catch (error: any) {
    console.error("Transmission Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
