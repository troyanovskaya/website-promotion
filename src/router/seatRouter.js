const express = require('express');
const router = express.Router();
const {createSeat, getSeatsFromHall} = require('../service/seatService')
//const {authMiddleware}=require('./middleware/authMiddleware.js');
//createSeat

router.post('/seat', createSeat);
router.get('/seats/:hall', getSeatsFromHall);

// router.get('/', authMiddleware, getNotes);

// router.get('/:id', authMiddleware, getNote);

// router.delete('/:id', authMiddleware,  deleteNote);

// router.put('/:id', authMiddleware, updateNote);
// router.patch('/:id', authMiddleware, changeCheckNote)

module.exports = {
  seatRouter: router
};
