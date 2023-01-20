/*
 * db.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides a connection to mongoDB.
 * ------------
 */
const mongoose = require('mongoose');

// use async to provide the connection
mongoose.Promise = global.Promise;

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  const conn = await mongoose.connect(process.env.LOCALHOST_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB Connected successfully'))
    .catch((err) => console.log('MongoDB Connection failed',err));
}

module.exports = connectDB;