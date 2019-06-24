// Install Express Server
const express = require('express');
const path = require('path');

const app = express();

// Serve only static files 
app.use(express.static('./dist/angular-forms'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/angular-forms/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);