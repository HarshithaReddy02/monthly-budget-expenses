const db=require('./db');
class expense{
    static create(type,amount,month,callback){
        const sql='INSERT INTO expenses(type,amount,month) VALUES(?,?,?)';
        db.query(sql,[type,amount,month],callback);
    }

    static getAll(callback){
        const sql='SELECT * FROM expenses';
        db.query(sql,callback)
    }
}
module.exports=expense