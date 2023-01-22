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
 * Middleware
 */

 app.use(globals.bodyParser.urlencoded({ extended: true }));
 app.use(globals.bodyParser.json());
 app.use(globals.cors(corsOptions));
 app.use(globals.morgan('dev'));
 app.use(globals.logger);

/**
 * Connect to MongoDB
 */

const { connectDB } = require('./models/db');
const dbConfig = require('./config/db.config');

connectDB()
  .then(() => {
  console.log(`MONGODB_Uri://${dbConfig.HOST}:${dbConfig.PORT}`)
});





/**
 * Routing
 */
app.get('/', (req, res) => {
  console.log(`Initializing the Application`)
  res.json({
    message: 'Welcome to the Vacation Rental Application'
  });
});


/**
 * Error Handling
 */
app.use(function(req, res, next) {
  next(globals.createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  globals.locals.message = res(err.statusMessage)
  globals.locals.error = req.app.get('env') === 'development'? err : {};

  // render the error page
  globals.status = res(err.statusMessage || 500);
  globals.render('Error')
});

/**
 * Start Server
 */

app.listen(PORT, () => {
   console.log(`Server is listening on PORT ${PORT}`)
 })
module.exports = globals.app;