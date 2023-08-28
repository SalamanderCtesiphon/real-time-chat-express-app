const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbUrl = 'mongodb+srv://swbrookshire:database@cluster0.0zulids.mongodb.net/?retryWrites=true&w=majority';

const server = app.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));