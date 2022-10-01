const express = require('express')
const wordChallenge = require('./controllers/wordChallenge')

const routes = express.Router();

routes.get('/word/:name', wordChallenge.find)

module.exports = routes;