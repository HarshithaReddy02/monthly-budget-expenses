const express = require('express');
const { createIncome, getIncome } = require('../controllers/incomeController');
const router = express.Router();

router.post('/', createIncome);
router.get('/', getIncome);

module.exports = router;
