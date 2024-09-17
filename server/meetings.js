const express = require('express');
const meetingsRouter = express.Router();


module.exports = meetingsRouter

const {
    createMeeting,
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
} = require('./db');

meetingsRouter.param('id', (req, res, next, id) => {
    const meeting = getFromDatabaseById('meetings', id)
    if (meeting) {
        req.meeting = meeting
        next() }
    else {
        res.status(404).send()
    }
})

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