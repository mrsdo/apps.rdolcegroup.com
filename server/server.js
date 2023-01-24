/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides capabilities for Express Server.
 *  - Express is for building the Rest apis
 *  - cors provides Express middleware to enable CORS
 *  - create an Express app, then add request body parser and cors middlewares using app.use() method.
 *  - origin: http://localhost:8081.
 *  – define a GET route which is simple for test.
 *  – listen on port 8080 for incoming requests.
 * ------------
 */
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
}

/**
 * Parse content-types for Application/JSON and Application/Form-Urlencoded
 */
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Create a test JSON route
 */
app.get("/", (req, res) => {
  res.json({ message: "This is the express server loaded default with json." });
});


/**
 * Code to open Mongoose connection to MongoDB database
 */
const db = require("./models");
const Role = db.role;
const dbConfig = require('./config/db.config.js');

mongoose.set('strictQuery', true);
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// createNew Roles
// TODO: Revamp this as a seed or tasks function to include admin user with password reset.
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "tenant"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'tenant' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });

    }
  });
}

/**
 * start server
 */
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});