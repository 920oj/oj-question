const express = require("express");
const router = express.Router();
const helmet = require('helmet')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet())

let question = require('./question');
app.use('/', question);

module.exports = {
  path: "/api/",
  handler: app
};