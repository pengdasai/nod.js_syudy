var http = require('http');
var fs = require('fs')
var server = http.createServer();
server.on('request',function (req,res) {
    //res.end('hello word');
    var url = req.url;
    if (url === '/show'){
        fs.readFile('../views/show.html',function (error,data) {
            if (error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('读取失败！');
            }else {
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        })
    }else if (url === '/img'){
        fs.readFile('../public/images/BlueDream_4k.jpg',function (error,data) {
            if (error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('读取失败！');
            }else {
                //图片不需要编码
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    }
});
server.listen('3001',function () {
    console.log('server start')
})
