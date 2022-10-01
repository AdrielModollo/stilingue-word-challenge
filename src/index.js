const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');

const app = express();

app
    .use(express.json())
    .use(routes)
    .use(bodyParser.json())

app.listen(3333);