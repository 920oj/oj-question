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

router.get('/question/:index', function(req, res, next) {
  let indexId = req.params.index;
  let query = Question.findOne( {index: indexId} ).exec();
  query.then(function(result) {
    if(result == null) {
      res.status(404);
      res.end('404 Not Found.')
    }
    else {
      console.log(result);
      res.send(result);
    }
  }, function(err) {
    console.log(err);
    res.status(400);
    res.end('400 Bad Request.');
    throw err;
  })
})

module.exports = router