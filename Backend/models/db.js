const mysql=require('mysql2');
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "monthlyexpenses",
})
db.connect((err)=>{
    // if(err) throw err;
    console.log('Connected to MYSQL')
})
module.exports=db;
