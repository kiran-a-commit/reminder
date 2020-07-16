const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Task = require('./models/Task');
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');
const port = 4000;
const apiToken = '1094403671:AAHf2eCtnszbKR5JK6-yB-s056VmHOPRh3U';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/reminderdb", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Created instance of TelegramBot
const bot = new TelegramBot(apiToken, {
   polling: true
});

app.post('/createUser', async (req, res) => {
     const userId = req.body.userId;
     console.log(req.body);
     const user = new User({userId: userId});
     await User.findOne({userId: userId}, async (error, isUserFound) => {
          if(isUserFound) {
               console.log("User already present. Just login")
          } else {
               const saveUser  = await user.save();
               res.status(200).send({success: saveUser});
          }
     })
})

app.post('/createTask', async (req, res) => {
     const getTaskBody = req.body;
     const task = new Task(getTaskBody);

     try {
          await task.save()
          console.log(task)
          res.status(201).send(task)
      }
  
      catch(e) {
           console.log(e)
          res.status(400).send(e)
      }
})

app.get('/tasks/:id', async (req, res) => {
     const getTasks = await Task.find({owner: req.params.id})
     res.status(200).send(getTasks);
})

// Listener (handler) for telegram's /getTasks event
bot.onText(/\/start/, (msg, match) => {
     const chatId = msg.chat.id;
     const tasks = match.input.split(' ')[1];
     // 'msg' is the received Message from Telegram
     // 'match' is the result of executing the regexp above on the text content
     // of the message
  
     bot.sendMessage(
         chatId,
         'Hello!',
     );
  });


// Listener (handler) for telegram's /getTasks event
bot.onText(/\myTasks/, async (msg, match) => {
     const chatId = msg.chat.id;
     // 'msg' is the received Message from Telegram
     // 'match' is the result of executing the regexp above on the text content
     // of the message.
     var messageString = ""
     try {
          if(!User.find({userId: chatId})) {
               messageString = "Please register to use this service."
          } else {
               await Task.find({owner: chatId}).then((tasks) => {
                    for(let i=0; i< tasks.length; i++) {
                         messageString = messageString + '\n' + 
                         `${i + 1}.` + '\n' + 
                         "Description: " + `${tasks[i].reminder_description}` + '\n' + 
                         "Responsible: " + `${tasks[i].reminder_responsible}` + '\n' + 
                         "Frequency: " + `${tasks[i].reminder_frequency}`
                    }
               })
            
               bot.sendMessage(
                   chatId,
                   messageString,
               );
          }
     } catch(e) {
          console.log(e);
     }
  });

  app.listen(port, () => {
    console.log("Connected to port 4000");
})