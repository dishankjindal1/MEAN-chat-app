const express = require('express');
const http = require('http');

const app = express();
const api = require('./api');


app.use(express.static('public'));

app.use('/api', api);

http.createServer(app).listen(process.env.PORT || 3000);