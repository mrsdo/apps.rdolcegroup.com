const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3004;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/listings', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/listings', (req, res) => {
    res.end('Will send all the listings to you');
});

app.post('/listings', (req, res) => {
    res.end(`Will add the listing: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/listings', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /listings');
});

app.delete('/listings', (req, res) => {
    res.end('Deleting all listings');
});

app.get('/listings/:listingId', (req, res) => {
    res.end(`Will send details of the listing: ${req.params.listingId} to you`);
});

app.post('/listings/:listingId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /listings/${req.params.listingId}`);
});

app.put('/listings/:listingId', (req, res) => {
    res.write(`Updating the listing: ${req.params.listingId}\n`);
    res.end(`Will update the listing: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/listings/:listingId', (req, res) => {
    res.end(`Deleting listing: ${req.params.listingId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});