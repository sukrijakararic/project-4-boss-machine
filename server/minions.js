const express = require('express');
const minionsRouter = express.Router();

module.exports = minionsRouter

const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

minionsRouter.param('id', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id)
    if (minion) {
        req.minion = minion
        next() }
    else {
        res.status(404).send()
    }
})

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'))
})

minionsRouter.post('/', (req, res, next) => {
    const minion = addToDatabase('minions', req.body);
    res.status(201).send(minion);
})

minionsRouter.get('/:id', (req, res, next) => {
    res.send(req.minion)
})

minionsRouter.put('/:id', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion)
})

minionsRouter.delete('/:id', (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.params.id);
    if(deletedMinion) {
        res.status(204);
    } else {
        res.status(404);
    }
    res.send()
})