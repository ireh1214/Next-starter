const express = require("express");
const next = require("next");
const session = require("express-session");
const mongoose = require("mongoose");

const mongoSessionStore = require("connect-mongo");

// Load all variables from .env file to "process.env
require("dotenv").config();

// Require MongoDB models
require("./models/Post");
require("./models/User");

// Check if it is Dev and its port to change ROOT_URL dynamically 
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;
const app = next({ dev });

mongoose
  .connect(
      process.env.MONGO_URI
  )
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

app.prepare().then(() => {
    const server = express();

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Server listening on ${ROOT_URL}`);
    });
});