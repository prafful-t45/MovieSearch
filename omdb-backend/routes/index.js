var express = require('express');
var router = express.Router();
var axios = require('axios');
const { default: Axios } = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
    // Option 1 
    // Forward request to (next) middleware
    // Option 2 
    // Send a response     
    res.send('Welcome to OMDB Backend Express Server') // Send Response
});

require('dotenv').config();
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = process.env.OMDB_URL;

router.get('/search', (req, res, next) => {
    const title = req.query.title
    const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
    axios.get(url)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.send(err);
        })
});


router.get('/imdb/:imdbId', (req, res, next) => {
    const imdbId = req.query.imdbId
    const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${title}`
    axios.get(url)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;