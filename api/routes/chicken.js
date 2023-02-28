const express = require('express');
const {
  create, get, getAll, update, remove, run,
} = require('../controllers/chicken');

const router = express.Router();

router.post('/', create);
router.get('/:id', get);
router.get('/', getAll);
router.patch('/:id', update);
router.delete('/:id', remove);
router.post('/:id', run);

module.exports = router;
