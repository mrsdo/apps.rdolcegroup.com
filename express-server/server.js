/*
 * server.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file provides baseline functionality for the app
 * ------------
 */
/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * Requires: body-parser, CORS, dotenv, express, mongodb, mongoose, morgan, nodemon
 * ------------
 */


// Import Global Modules
globals = require('./config/globals');

/**
 * Application Configurations
 */
const corsOptions = {
  origin: 'https://localhost:8081'
}
const app = globals.express();
const PORT = process.env.PORT || 8080;

/**
 * Body Parser Middleware
 */

 app.use(globals.bodyParser.urlencoded({ extended: true }));
 app.use(globals.bodyParser.json());
 app.use(globals.cors(corsOptions));

/**
 * Create a test JSON route
 */
app.get('/', (req, res) => {
  console.log(`Initializing the Application`)
  res.json({
    message: 'Welcome to the Vacation Rental Application'
  });
});
 
 /**
  * Database Configurations
  */

app.listen(PORT, () => {
   console.log(`Server is listening on PORT ${PORT}`)
 })