const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Question = new Schema({
  index: Number,
  name: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  isAnswered: boolean
})

Question.plugin(AutoIncrement, {
  inc_filed: 'index'
});

mongoose.connect('mongodb://127.0.0.1/ojq');

exports.Question = mongoose.model('Question', Question);