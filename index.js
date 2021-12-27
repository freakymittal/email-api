const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "michael.howe3@ethereal.email",
        pass: "Rk31Khj71X7wSKtYgp",
      },
    });


app.post("/", async (req, res) => {
  const { to, email_body } = req.body;

  try {
    let message = {
      from: "michael.howe3@ethereal.email",
      to: to,
      subject: "Mail from API",
      text: email_body,
    };

    await transporter.sendMail(message);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
