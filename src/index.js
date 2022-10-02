const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');
const { globalErrorsMiddlewares } = require('./main/middlewares/globalMiddlewares');

const app = express();

app
    .use(express.json())
    .use(routes)
    .use(globalErrorsMiddlewares)
    .use(bodyParser.json())

app.listen(3333);