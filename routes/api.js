const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

let displayData = null;

router.post("/update-display", auth, (req, res) => {
  displayData = req.body;
  res.sendStatus(200);
});

router.get("/display", (req, res) => {
  res.json(displayData || {});
});

router.post("/reset", auth, (req, res) => {
  displayData = null;
  res.sendStatus(200);
});

// ✅ Token generation endpoint
router.post("/generate-token", (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.AUTH_USER &&
    password === process.env.AUTH_PASS
  ) {
    const token = jwt.sign({ user: username }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
