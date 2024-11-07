const Income = require('../models/income');

const createIncome = (req, res) => {
    const { investment, source, amount ,month} = req.body;
    
    Income.create(investment, source, amount,month, (err, result) => {
        if (err) return res.status(500).send('Error creating income');
        res.status(201).send('Income added successfully');
    });
};

const getIncome = (req, res) => {
    Income.getAll((err, results) => {
        if (err) return res.status(500).send('Error retrieving income');
        res.status(200).json(results);
    });
};

module.exports = { createIncome, getIncome };
