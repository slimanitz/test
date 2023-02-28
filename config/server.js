const express = require('express');
require('express-async-errors');
const cors = require('cors');
const router = require('../api/routes');
const { errorHandler } = require('../middlewares/error');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/', router);
app.use(errorHandler);

module.exports = app;
