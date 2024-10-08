const express = require('express');
const ideasRouter = express.Router();

module.exports = ideasRouter

const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea')

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id)
    if (idea) {
        req.idea = idea
        next() }
    else {
        res.status(404).send()
    }
});

ideasRouter.get('/', (req, res, next) => { 
    res.send(getAllFromDatabase('ideas'))
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const idea = addToDatabase('ideas', req.body);
    res.status(201).send(idea);
});


ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea)
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea)
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(404);
    }
    res.send()
})