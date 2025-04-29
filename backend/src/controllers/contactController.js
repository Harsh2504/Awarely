const transporter = require("../config/nodemailer");
const { validationResult } = require("express-validator");

exports.sendContactEmail = (req, res) => {
  const errors = validationResult(req);

  // Check if there are validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  const mailOptionsToAdmin = {
    from: email,
    to: "sergiomarquina004@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptionsToAdmin, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    const mailOptionsToUser = {
      from: "sergiomarquina004@gmail.com",
      to: email,
      subject: "Confirmation of Received Mail",
      html: `
        <h3>Thank you for reaching out to us!</h3>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br/>Awarely Team</p>
      `,
    };

    transporter.sendMail(mailOptionsToUser, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send("Message sent successfully!");
    });
  });
};
