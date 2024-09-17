const express = require('express');
const minionRouter = express.Router();

module.exports = minionRouter

const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

minionRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'))
})