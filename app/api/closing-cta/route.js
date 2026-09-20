import { dbConnect } from "@/lib/mongodb";
import ContactSubmission from "@/model/ContactSubmission";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    const email = body?.email?.trim().toLowerCase();
    const company = body?.company?.trim() || "";
    const helpType = body?.helpType?.trim() || "";
    const message = body?.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill in your name, email, and project details." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await dbConnect();

    const submission = await ContactSubmission.create({
      name,
      email,
      company,
      helpType,
      message,
      source: "closing-cta",
    });

    // Email notification is best-effort — a failed send shouldn't fail
    // the whole submission, since the lead is already saved in Mongo.
    try {
      await sendNotificationEmail({
        subject: `New project inquiry — ${name}${company ? ` (${company})` : ""}`,
        replyTo: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "—"}`,
          `Help with: ${helpType || "—"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <div style="font-family: sans-serif; font-size: 14px; color: #111;">
            <h2 style="margin-bottom: 16px;">New project inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
            <p><strong>Help with:</strong> ${escapeHtml(helpType || "—")}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        `,
      });
    } catch (mailError) {
      console.error("Notification email failed:", mailError);
    }

    return Response.json({ id: submission._id, message: "Submitted successfully." }, { status: 201 });
  } catch (error) {
    console.error("Closing CTA submission error:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}