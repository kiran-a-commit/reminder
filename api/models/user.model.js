const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    requestId: {
        type: String,
        required: true
    }
})

module.exports = User;
