/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * Requires: body-parser, CORS, dotenv, express, mongodb, mongoose, morgan, nodemon
 * ------------
 */

// import modules
const express = require('express'); //Fast, un-opinionated, minimalist web framework for Node.js
const bodyParser = require('body-parser');
const cors = require('cors');  //restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const dotenv = require('dotenv'); //Loads environment variables from a .env file into process.env
const morgan = require('morgan'); //HTTP request logger middleware for node.js
const logger = require('./utils/logger')


// Create Express app
const app = express();


// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set default routes, directories and paths
/* app.use(express.static(path.join(__dirname, 'public'))); */
/**
 * Create a test JSON route
 */
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the User Onboarding Application'
  });
});

// Set hostname. Set port use process.env to define port or use 8080

const port = process.env.PORT || 8080;

// Listener: Outputs status of server to console.log
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

// Shut down server if we run into problems
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})