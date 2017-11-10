// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Return index.html only in production mode (process.env.NODE_ENV set up in package.json)
if (process.env.NODE_ENV == "prod") {
    // Point static path to dist
    app.use(express.static(path.join(__dirname, '../public')));

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
} else {
    //Return message if it not production mode
    app.get('*', (req, res) => {
        res.send("API running in development mode (only `/api` routes)");
    });
}

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '1111';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));