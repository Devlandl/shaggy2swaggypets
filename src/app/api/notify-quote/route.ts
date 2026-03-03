import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY not set - skipping email notification");
      return NextResponse.json({ success: true, skipped: true });
    }

    // Dynamic import to avoid build-time error when key is missing
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { customerName, email, phone, dogName, breed, weight, services, notes, photoUrl } = body;

    const serviceList = (services as string[])
      .map((s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()))
      .join(", ");

    const { error } = await resend.emails.send({
      from: "Shaggy 2 Swaggy Quotes <onboarding@resend.dev>",
      to: process.env.GROOMER_EMAIL || "shaggy2swaggypets@gmail.com",
      subject: `New Quote Request from ${customerName} for ${dogName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #FDF6EE; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7B3F00, #A0522D); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">A customer wants a grooming quote!</p>
          </div>

          <div style="padding: 32px;">
            <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; border: 1px solid #f0e6d6;">
              <h2 style="color: #7B3F00; margin: 0 0 16px; font-size: 18px;">Customer Info</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; color: #666; width: 120px;">Name:</td><td style="padding: 6px 0; font-weight: 600;">${customerName}</td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #7B3F00;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #666;">Phone:</td><td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #7B3F00;">${phone}</a></td></tr>
              </table>
            </div>

            <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; border: 1px solid #f0e6d6;">
              <h2 style="color: #7B3F00; margin: 0 0 16px; font-size: 18px;">Pet Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; color: #666; width: 120px;">Pet Name:</td><td style="padding: 6px 0; font-weight: 600;">${dogName}</td></tr>
                ${breed ? `<tr><td style="padding: 6px 0; color: #666;">Breed:</td><td style="padding: 6px 0;">${breed}</td></tr>` : ""}
                ${weight ? `<tr><td style="padding: 6px 0; color: #666;">Weight:</td><td style="padding: 6px 0;">${weight}</td></tr>` : ""}
                <tr><td style="padding: 6px 0; color: #666;">Services:</td><td style="padding: 6px 0;">${serviceList}</td></tr>
                ${notes ? `<tr><td style="padding: 6px 0; color: #666;">Notes:</td><td style="padding: 6px 0;">${notes}</td></tr>` : ""}
              </table>
            </div>

            ${photoUrl ? `
            <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #f0e6d6;">
              <h2 style="color: #7B3F00; margin: 0 0 16px; font-size: 18px;">Pet Photo</h2>
              <img src="${photoUrl}" alt="${dogName}" style="width: 100%; max-width: 400px; border-radius: 12px; border: 2px solid #f0e6d6;" />
            </div>
            ` : ""}

            <div style="text-align: center; margin-top: 24px;">
              <p style="color: #999; font-size: 12px;">Reply to this customer at <a href="mailto:${email}" style="color: #7B3F00;">${email}</a> or call <a href="tel:${phone}" style="color: #7B3F00;">${phone}</a></p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email notification error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
