const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  postedAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);