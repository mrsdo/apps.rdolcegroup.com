/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides functional capabilities of the application.
 * ------------
 */

/**
 * Package Imports
 */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const dotenv = require('dotenv'); //Loads environment variables from a .env file into process.env
const morgan = require('morgan');

/**
 * Import local file dependencies
 */
dotenv.config({ path: './config/config.env' });

/**
 * Express App configuration
 */
const app = express();

/**
 * Middleware
 */
// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

/**
 * CORS configurations
 * This corsOptions object enables CORS action for all origins running on port 8080 only.
 * No CORS action will be enabled on any other port.
 */
const corsOptions = {
  origin: 'https://localhost:8080'
}
app.use(cors({origin: true, credentials: true}, (corsOptions)));

/**
 * Routes
 */

/**
 * Initialize the server
 */
const port = process.env.PORT || 5000;


const server = app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`)
})

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})