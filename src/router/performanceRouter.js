const express = require('express');
const router = express.Router();
const {createPerformance, changePerformanceTime, deletePerformance, getPerformanceForDate} = require('../service/performanceService')

router.post('/performance', createPerformance);
router.patch('/performance', changePerformanceTime);
router.delete('/performance', deletePerformance);
router.get('/performance', getPerformanceForDate);

module.exports = {
  performanceRouter: router
};
