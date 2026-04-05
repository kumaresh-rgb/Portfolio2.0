"use server";

import { Resend } from "resend";

// Next.js uses process.env to access environment variables
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const senderName = formData.get("senderName") as string;
  const message = formData.get("message") as string;

  if (!senderEmail || senderEmail.length > 500) {
    return { error: "Invalid email" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "kumareshmusk@gmail.com",
      subject: `New Message from ${senderName}`,
      replyTo: senderEmail,
      text: `Message from: ${senderEmail}\n\n${message}`,
    });

    return { data };
  } catch (error: any) {
    return { error: error.message };
  }
};
