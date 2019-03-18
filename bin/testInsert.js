var  mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'nodejs'
});
connection.connect();

var modsql = 'insert into websites VALUES (\'6\',\'菜鸟移动站\',\'https://m.runoob.com\',534,\'RSA\')';

connection.query(modsql,function (err,res) {
    if (err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }else {
        console.log('更新结果：'+res.affectedRows);
    }
});

connection.end();