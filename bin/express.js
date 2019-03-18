var express = require('express');

//创建服务器
var app = express();

//开放资源
app.use('/public/',express.static('../public/'));
app.get('/',function (req,res) {
    res.send('hello word!');
});

app.get('/about',function (req,res) {
    res.send('hello 新开普');
});

app.listen(3003,function () {
    console.log('app is running at port 3003');
});