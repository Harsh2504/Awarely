const { body } = require("express-validator");
const express = require("express");
const { sendContactEmail } = require("../controllers/contactController");

const router = express.Router();

const validateContactInput = [
  body("email", "Invalid email address").isEmail(),
  body("message", "Message must be at least 10 characters long").isLength({
    min: 10,
  }),
];

router.post("/contact", validateContactInput, sendContactEmail);

module.exports = router;
