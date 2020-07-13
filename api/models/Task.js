const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    owner: {
        type: String,
        required: true,
        ref:'User'
    },
    reminder_description: {
        type: String,
        required: true
    },
    reminder_responsible: {
        type: String,
        required: true
    },
    reminder_frequency: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Task', TaskSchema);
