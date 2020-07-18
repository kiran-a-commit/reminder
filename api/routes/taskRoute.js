const Task = require('../models/Task');
const express = require('express');
const router = express.Router();

router.post('/createTask', async (req, res) => {
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

router.get('/tasks/:id', async (req, res) => {
    const getTasks = await Task.find({owner: req.params.id})
    res.status(200).send(getTasks);
})

module.exports = router;