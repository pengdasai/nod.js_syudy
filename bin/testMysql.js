var  mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'nodejs'
});
connection.connect();

var sql = 'select * from websites';

connection.query(sql,function (err, res) {
    if (err){
        console.log('select err'+err.message);
        return;
    }else {
        console.log(res)
    }
});
connection.end();