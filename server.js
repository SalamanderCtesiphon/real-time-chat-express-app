const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbUrl = 'mongodb+srv://swbrookshire:database@cluster0.0zulids.mongodb.net/?retryWrites=true&w=majority';

const server = app.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));


var Message = mongoose.model("Message",{ name : String, message : String});

mongoose.connect(dbUrl);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  });
});

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
});