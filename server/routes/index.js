var { Router }      = require('express');
var botRouter       = require('./search');

const v1Router = Router();
v1Router.use('/api/v1', botRouter);

module.exports =  v1Router;