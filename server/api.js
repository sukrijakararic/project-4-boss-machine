const express = require('express');
const apiRouter = express.Router();


const minionsRouter = require('./minion');

apiRouter.use('/minion', minionsRouter);



module.exports = apiRouter;
