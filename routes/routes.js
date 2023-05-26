const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const eventRouter = express.Router();
const eventController = require('../controllers/Controllers.js');


eventRouter.get('/events/:id', eventController.getEventById);


eventRouter.get('/events', eventController.getLatestEvents);

eventRouter.post('/events', upload.single('image'), eventController.createEvent);


eventRouter.put('/events/:id', upload.single('image'), eventController.updateEvent);


eventRouter.delete('/events/:id', eventController.deleteEvent);

module.exports = eventRouter;