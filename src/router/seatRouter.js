const express = require('express');
const router = express.Router();
const {createSeat, getSeatsFromHall, deleteSeat} = require('../service/seatService')

router.post('/seat', createSeat);
router.delete('/seat', deleteSeat);
router.get('/seats/:hall', getSeatsFromHall);

module.exports = {
  seatRouter: router
};
