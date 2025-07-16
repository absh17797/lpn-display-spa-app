require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Secure headers
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

// Rate limiting
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 20 });
app.use("/api/", limiter);

// CORS policy
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));

// IP whitelist middleware
app.use((req, res, next) => {
  const whitelist = (process.env.ALLOWED_IPS || "").split(",");
  const clientIp = req.ip.replace("::ffff:", "");
  if (whitelist[0] && !whitelist.includes(clientIp)) {
    return res.status(403).send("IP not allowed");
  }
  next();
});

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// PIN-protected screen (optional)
app.get("/", (req, res) => {
  if (process.env.SCREEN_PIN && req.cookies.pin !== process.env.SCREEN_PIN) {
    return res.render("login");
  }
  res.render("index");
});

app.post("/auth", (req, res) => {
  let body = "";
  req.on("data", chunk => body += chunk);
  req.on("end", () => {
    const params = new URLSearchParams(body);
    if (params.get("pin") === process.env.SCREEN_PIN) {
      res.cookie("pin", process.env.SCREEN_PIN, { httpOnly: true });
      return res.redirect("/");
    } else {
      res.send("Incorrect PIN");
    }
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
