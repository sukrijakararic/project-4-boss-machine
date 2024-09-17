const express = require('express');
const apiRouter = express.Router();


const minionRouter = require('./minion');

apiRouter.use('/minion', minionRouter);



module.exports = apiRouter;
