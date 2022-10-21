const express = require('express');
const router = express.Router();
const {createNote, getNotesByname, deleteNote}= require('../service/noteService.js');
router.post('/note', createNote);
router.get('/userNotes', getNotesByname);
router.delete('/note', deleteNote);


module.exports = {
  noteRouter: router
};
