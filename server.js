/* server.js */

const express = require('express');
const app = express();

let path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(8000);
