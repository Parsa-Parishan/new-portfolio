const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    password: process.env.PASS,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  error
    ? console.log(error)
    : console.log(`Server is ready to take message ${success}`);
});

app.post("/send", (req, res) => {
  console.log(req.body);
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (err, success) => {
    err ? console.log("Error " + err) : console.log("Email sent successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
