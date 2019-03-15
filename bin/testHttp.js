//创建编写服务器
var http = require('http');
var server = http.createServer();
server.on('request',function (req,res) {
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    console.log('get req:'+req.url);
    //res.write('hello nidejs');
    //res.end('hello nidejs');
    //根据不同的路径返回不同的页面
    var url = req.url;
    if (url == '/'){
        res.end('index');
    }else if (url == '/login'){
        res.end('login index');
    }else if (url === '/products'){
        var products =[
            {
                name: 'iphone',
                price: 4999
            },
            {
                name: 'mi',
                price: 2999
            }
        ]
        res.end(JSON.stringify(products));
    }else {
        res.end('not found 404');
    }
});
//启动
server.listen(8888,function () {
    console.log('start successfuly');
})