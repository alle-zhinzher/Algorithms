const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gitLink: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  userID: {
    type: String,
    required: true
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);