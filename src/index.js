const express = require('express');
const word = require('./wordChallenge');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

app.get('/teste', (req, res) => {
    return res.send(word);
});


app.listen(3333)