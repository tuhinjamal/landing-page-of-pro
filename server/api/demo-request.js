import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("Received demo request:", body); // <-- log input

    const { name, phone, email, company, employees, notes } = body;

    if (!name || !phone || !email) {
      return {
        success: false,
        message: "Name, phone, and email are required.",
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sales.inflack@gmail.com",
        pass: "bsev zbyy elhc sxpm", // Use env variable
      },
    });

    // Verify transporter works
    await transporter.verify();
    console.log("SMTP verified successfully");

    const mailOptionsAdmin = {
      from: `"ProHR Demo Request" <sales.inflack@gmail.com>`,
      to: "sales.inflack@gmail.com",
      subject: `🌟 ${name} Has Asked for a Free Demo Request`,
      html: `
      <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="background-color: #F47920; padding: 20px; color: white; text-align: center;">
            <h2 style="margin:0;">New Demo Request</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Employees:</strong> ${employees}</p>
            
          </div>
          <div style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#777;">
            You are receiving this email because a new demo request was submitted.
          </div>
        </div>
      </div>
      `,
    };

    const mailOptionsUser = {
      from: `"ProHR Team" <sales.inflack@gmail.com>`,
      to: email,
      subject: "Demo Request Confirmation – ProHR",
      html: `
    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="background-color: #F47920; padding: 20px; color: white; text-align: center;">
          <h2 style="margin:0;">Demo Request Confirmation – ProHR</h2>
        </div>
        <div style="padding: 20px; color: #333; line-height: 1.6;">
          <p>Hello <strong>${name}</strong>,</p>
          <p>Thank you for requesting a <strong>ProHR</strong> demo.</p>
          <p>We have received your request with the following details:</p>
          <div style="background:#f9f9f9; border:1px solid #eee; padding:15px; border-radius:8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company Name:</strong> ${company}</p>
            <p><strong>Company Size:</strong> ${employees}</p>
          </div>
          <p style="margin-top:15px;">
            Our team will contact you shortly to schedule your demo.
          </p>
          <p>
            📞 For a quick response, please call us directly at 
            <strong>01888268886 (WhatsApp)</strong>.
          </p>
          <p>Best regards,</p>
          <p><strong>The ProHR Team</strong></p>
        </div>
        <div style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#777;">
          Please do not reply to this email. This is an automated message.
        </div>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return { success: true, message: "Emails sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error); // <-- detailed error
    return { success: false, message: "Failed to send emails." };
  }
});
