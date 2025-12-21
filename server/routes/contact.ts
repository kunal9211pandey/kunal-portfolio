import { Router, Request, Response } from "express";
import { sendContactEmail } from "../email";

const router = Router();

router.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // Get recipient email from environment or use default
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;

    if (!recipientEmail) {
      return res.status(500).json({
        success: false,
        message: "Email service not configured",
      });
    }

    // Send email
    await sendContactEmail(name, email, message, recipientEmail);

    return res.json({
      success: true,
      message: "Message sent successfully! Check your inbox.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

export default router;
