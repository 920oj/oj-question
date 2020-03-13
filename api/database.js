const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Questions = new Schema({
  index: Number,
  name: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  isAnswered: boolean
})

mongoose.connect('mongodb://127.0.0.1/ojq');

exports.Questions = mongoose.model('Questions', Questions);