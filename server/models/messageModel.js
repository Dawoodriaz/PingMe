const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    trim: true,
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
  },
}, {
  timestamps: true, // Move the timestamps property inside the object
});

const Message = mongoose.model('Message', messageModel); // Add a name for the model

module.exports = Message; // Export the model
