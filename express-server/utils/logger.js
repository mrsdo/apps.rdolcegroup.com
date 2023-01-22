/*
 * logger.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file manages logging capabilities.
 * Author: Laurent Egbakou: https://lioncoding.com/author/laurent-egbakou/
 * ------------
 */

/**
 * Import Package requirements
 */




const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next();
}

module.exports = logger;