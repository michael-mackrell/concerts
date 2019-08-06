const express = require('express');
const router = express.Router();


//model for concerts
const Concert = require('../models/concerts');

//get all the concerts
router.get('/', (req, res) => {
    console.log('running')
    Concert.find()
    .then(concerts => res.json(concerts));
});

//add a new concert
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

//delete a concert
router.delete('/delete/:id', (req, res) =>  {
    Concert.findById(req.params.id).then((concert) => {
        concert.remove().then(() => res.json({success: true, id: req.params.id})).catch((error) => {res.status(420).json({success: false})})
    })
});


module.exports = router;