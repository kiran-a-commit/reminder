const TelegramBot = require('node-telegram-bot-api');
const apiToken = '1094403671:AAHf2eCtnszbKR5JK6-yB-s056VmHOPRh3U';
const User = require('../models/User');
const Task = require('../models/Task');


// Created instance of TelegramBot
const bot = new TelegramBot(apiToken, {
    polling: true
 });

 listeners = () => {
    // Listener (handler) for telegram's /getTasks event
bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
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
 }

 module.exports = {
     listeners
 }