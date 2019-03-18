var express = require('express');
var router = require('../routes/router.js');

var app = express();

//开放静态资源
app.use('/node_modules/',express.static('../node_modules/'));
app.use('/public/',express.static('../public/'));
//模板引擎
app.engine('html',require('express-art-template'));

app.use(router);

app.listen(3005,function () {
    console.log('server is running...');
});