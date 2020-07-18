const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const taskRouter = require('./routes/taskRoute');
const port = 4000;
const telegramService = require('./telegramService/telegram');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes.
app.use(userRouter);
app.use(taskRouter);


// Connection to MongoDB through Mongoose.
mongoose.connect("mongodb://localhost/reminderdb", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Tasks related to Telegram.
telegramService.listeners();
telegramService.scheduler();

  app.listen(port, () => {
    console.log("Connected to port 4000");
})