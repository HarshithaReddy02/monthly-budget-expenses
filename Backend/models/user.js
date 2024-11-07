//create columns along with datatype  for collections


const db=require('./db');
class user{
    static create(username,email,password,callback){
        const sql='INSERT INTO users(username,email,password) VALUES (?,?,?)';
        db.query(sql,[username,email,password],callback);
    }
    static findByEmail(email,callback){
        const sql='SELECT * FROM users WHERE email=?';
        db.query(sql,[email],callback);
    }
}
module.exports=user;