const express = require("express");
const router = express.Router();

require('dotenv').config()
const env = process.env

const database = require("./database.js");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const Question = database.Question;

let question = require('./question');
app.use('/', question);

module.exports = {
  path: "/api/",
  handler: app
};