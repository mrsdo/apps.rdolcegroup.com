/*
 * secret.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides generates a random secret string for security.
 * src: https://www.npmjs.com/package/crypto-random-string
 * ------------
 */

const cryptoRandomString = require( 'crypto-random-string');

const secret = () => {
  //TODO: Integrate into JWT authentication for users
  return cryptoRandomString({length: 10, type: 'base64'});
  console.log(cryptoRandomString);
};
module.exports = secret;