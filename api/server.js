const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const User = require('./models/user.model');
const port = 80;
const url = 'https://api.telegram.org/bot';
const apiToken = '1094403671:AAHf2eCtnszbKR5JK6-yB-s056VmHOPRh3U';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoints
app.post('/', (req, res) => {
  console.log(req.body);
  const chatId = req.body.message.chat.id;
  const sentMessage = req.body.message.text;
  // Regex for hello
  if (sentMessage.match(/hello/gi)) {
       axios.post(`${url}${apiToken}/sendMessage`,
            {
                 chat_id: chatId,
                 text: 'hello back 👋'
            })
            .then((response) => { 
                 res.status(200).send(response);
            }).catch((error) => {
                 res.send(error);
            });
  } else {
       // if no hello present, just respond with 200 
       res.status(200).send({});
  }
});

app.get('/user/:id', (req, res) => {
    const user = User.findOne({requestId: req.params.id})
    res.status(200).send({user_Id: user._id})
})

  app.listen(port, () => {
    console.log("Connected to port 80");
})