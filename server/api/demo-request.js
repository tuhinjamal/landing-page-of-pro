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
        user: "tuhinjamal1@gmail.com",
        pass: "ffaa zajh ayey wstc", // Use env variable
      },
    });

    // Verify transporter works
    await transporter.verify();
    console.log("SMTP verified successfully");

    const mailOptionsAdmin = {
      from: `"ProHR Demo Request" <tuhinjamal1@gmail.com>`,
      to: "tuhinjamal1@gmail.com",
      subject: "New Demo Request",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p></p><strong>Company:</strong> ${company}</p>
             <p><strong>Employees:</strong> ${employees}</p>
             <p><strong>Notes:</strong> ${notes}</p>
             `,
    };

    const mailOptionsUser = {
      from: `"ProHR Team" <tuhinjamal1@gmail.com>`,
      to: email,
      subject: "Your Demo Request Received",
      html: `<p>Hello ${name}, your request is received. Our team will contact you soon.</p>`,
    };

    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return { success: true, message: "Emails sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error); // <-- detailed error
    return { success: false, message: "Failed to send emails." };
  }
});
