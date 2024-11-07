const db = require('./db');

class Income {
    static create(investment, source, amount,month, callback) {
        const sql = 'INSERT INTO income (investment, source, amount,month) VALUES (?, ?, ?,?)';
        db.query(sql, [investment, source, amount,month], callback);
    }

    static getAll(callback) {
        const sql = 'SELECT * FROM income';
        db.query(sql, callback);
    }
}

module.exports = Income;
