const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let Question = new Schema({
  index: Number,
  name: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  isAnswered: Boolean
})

autoIncrement.initialize(mongoose.connection);

Question.plugin(autoIncrement.plugin, 'index');

mongoose.connect('mongodb://127.0.0.1/ojq');

exports.Question = mongoose.model('Question', Question);