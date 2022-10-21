const express = require('express');
const router = express.Router();
const {createNote, getNotesByname}= require('../service/noteService.js');
//const {authMiddleware}=require('./middleware/authMiddleware.js');

router.post('/note', createNote);

router.get('/userNotes', getNotesByname);

// router.get('/notes', getNotesByPerformanceAndDate);

// router.delete('/note', deleteNote);


module.exports = {
  noteRouter: router
};
