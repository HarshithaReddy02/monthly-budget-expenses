const Expense = require('../models/expenses');

const createExpense = (req, res) => {
    const { type, amount,month } = req.body;
    
    Expense.create(type, amount, month,(err, result) => {
        if (err) return res.status(500).send('Error creating expense');
        res.status(201).send('Expense added successfully');
    });
};

const getExpenses = (req, res) => {
    Expense.getAll((err, results) => {
        if (err) return res.status(500).send('Error retrieving expenses');
        res.status(200).json(results);
    });
};

module.exports = { createExpense, getExpenses };
