const express = require('express');
const http = require('http');

const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const api = require('./api');

app.use(express.static('public'));

app.use('/api', api);

http.createServer(app).listen(process.env.PORT || 3000);