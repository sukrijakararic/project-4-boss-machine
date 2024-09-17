const express = require('express');
const meetingsRouter = express.Router();


module.exports = meetingsRouter

const {
    createMeeting,
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'))
});

meetingsRouter.post('/', (req, res, next) => {
    const meeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(meeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings')
    res.status(204).send()
})