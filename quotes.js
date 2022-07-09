const express = require('express');
const router = express.Router()

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


router.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote });
});


router.get('/', (req, res, next) => {
    const { person } = req.query;
    if (person) {
        res.send({ quotes: quotes.filter(quote => quote.person === person) })
    } else {
        res.send({ quotes });
    }
})


router.post('/', (req, res, next) => {
    const { quote, person } = req.query;
    if (quote && person) {
        quotes.push(req.query)
        res.send({ quote: req.query })
    } else {
        res.status(400).send();
    }
})


module.exports = router;