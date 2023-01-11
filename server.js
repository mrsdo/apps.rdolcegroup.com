const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3003;

const app = express();
/*
*  Log the development version of Morgan
*  Load static files from the /public directory
*/
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This my apps.shegottablog.com Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});