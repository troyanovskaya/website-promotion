const express = require('express');
const router = express.Router();
const {createPerformance, changePerformanceTime, deletePerformance, getPerformanceForDate, getFuturePerformance, checkIfIsOver} = require('../service/performanceService')

router.post('/performance', createPerformance);
router.patch('/performance', changePerformanceTime);
router.delete('/performance', deletePerformance);
router.get('/performance', getPerformanceForDate);
router.get('/performance/:number', getFuturePerformance);
router.patch('/performanceStatus', checkIfIsOver)

module.exports = {
  performanceRouter: router
};
