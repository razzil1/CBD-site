const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.getHomePage);
router.get('/test', controller.getTest);
router.post('/message', controller.sendMessage);
router.get('/:language', controller.getHomePage);

module.exports = router;