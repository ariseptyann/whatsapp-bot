var { Router }      = require('express');
var WhatsappBot     = require('../controllers/WhatsappBot');

const botRouter = Router();

botRouter.post('/incoming', WhatsappBot.googleSearch);

module.exports = botRouter;