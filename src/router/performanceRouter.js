const express = require('express');
const router = express.Router();
const {createPerformance} = require('../service/performanceService')

router.post('/performance', createPerformance);
// router.delete('/seat', deleteSeat);
// router.get('/seats/:hall', getSeatsFromHall);

module.exports = {
  performanceRouter: router
};
