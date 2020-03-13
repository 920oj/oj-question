const express = require('express');
const app = express();
const router = express.Router();
const database = require('./database');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const Question = database.Question;

router.get('/question', function(req, res, next) {
  Question.find({}, function(err, result) {
    res.send(result);
  })
})

router.post('/question', function(req, res, next) {
  let new_question = new Question({
    name: req.body.name || '名無しさん',
    content: req.body.content,
    createdAt: new Date(),
    updatedAt: new Date(),
    isAnswered: false
  });
  
  new_question.save((err, save) => {
    if(err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(save);
      res.send(save);
    }
  });
})

module.exports = router