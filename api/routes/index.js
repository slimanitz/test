const express = require('express');
const health = require('./health');
const chicken = require('./chicken');
// __IMPORT__

const router = express.Router();
router.use('/ping', health);
router.use('/chickens', chicken);
// __ROUTE__

module.exports = router;
