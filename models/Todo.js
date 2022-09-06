const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  list: {
    type: String,
    required: false,
  },
  todo: {
    type: String,
    required: true,
  },
  giftFor: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
