const express = require('express');
const router = express.Router();


//model for concerts
const Concert = require('../models/concerts');


router.get('/', (req, res) => {
    console.log('running')
    Concert.find()
    .then(concerts => res.json(concerts));
});

router.post('/', (req, res) => {

    const newConcert = new Concert({
        name: req.body.showName,
        date: req.body.date, 
        venue: req.body.venue,
        id: req.body.showId,
        time: req.body.time,
        details: req.body.details
    });
    newConcert.save().then(concert => res.json(concert));
});


module.exports = router;