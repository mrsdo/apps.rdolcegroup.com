const express = require('express');
const morgan = require('morgan');
const listingRouter = require('./routes/listingRouter');

const hostname = 'localhost';
const port = 3004;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/listings', listingRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is the R. Dolce Group Localhost Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});