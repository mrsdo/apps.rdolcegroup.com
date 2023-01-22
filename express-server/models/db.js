/*
 * db.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides a connection to mongoDB.
 * ------------
 */

const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');


/**
 * Initialize Mongoose
 */
globals = require('mongoose');
globals.Promise = global.Promise;

/**
 * Const db Object
 */


const db = {};
db.mongoose = mongoose;
// Handling Mongoose depreciation warning
//TODO: Fix after Mongoose 7 release
db.mongoose.set('strictQuery', false);
const connectDB = async () => {
  const conn = await db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.MONGODB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log("Successfully connect to MongoDB.");

    })
    .catch(err => {
      console.error("Connection error", err);
      process.exit();
    });

}

/**
 * Import Models
 */


/**
 * Export Models
 */
module.exports = {db, connectDB};