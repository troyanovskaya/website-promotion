const express = require('express');
const router = express.Router();
const {createPerformance, changePerformanceTime} = require('../service/performanceService')

router.post('/performance', createPerformance);
router.patch('/performance', changePerformanceTime);
// router.get('/seats/:hall', getSeatsFromHall);

module.exports = {
  performanceRouter: router
};
