/*
 * logger.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides logging capabilities.
 * ------------
 */
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next();
}

module.exports = logger;