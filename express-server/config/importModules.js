/*
 * importModules.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is manages the imported modules required for the application.
 * ------------
 */
// import modules
const express = require('express'); //Fast, un-opinionated, minimalist web framework for Node.js
const bodyParser = require('body-parser');
const cors = require('cors');  //restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const dotenv = require('dotenv'); //Loads environment variables from a .env file into process.env
const morgan = require('morgan'); //HTTP request logger middleware for node.js

const importModules = {
  express,
  bodyParser,
  cors,
  dotenv,
  morgan,
}

module.exports = importModules;