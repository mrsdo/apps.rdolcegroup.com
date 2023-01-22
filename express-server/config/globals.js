/*
 * globals.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides global configuration settings for the application.
 * ------------
 */

// Required application packages
// import modules
const express = require('express'); //Fast, un-opinionated, minimalist web framework for Node.js
const bodyParser = require('body-parser');
const cors = require('cors');  //restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const dotenv = require('dotenv'); //Loads environment variables from a .env file into process.env
const morgan = require('morgan'); //HTTP request logger middleware for node.js
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const globals = {
  express,
  bodyParser,
  cors,
  dotenv,
  morgan,
  createError,
  path,
  cookieParser,
  logger,

};



module.exports = globals;