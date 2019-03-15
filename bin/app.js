var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');
var comments = [
    {
        name:'新开普',
        message:'杠杠的',
        dateTime:'2019年3月15日'
    },
    {
        name:'北京迪克',
        message:'杠杠的',
        dateTime:'2019年3月15日'
    },
    {
        name:'上海树维',
        message:'杠杠的',
        dateTime:'2019年3月15日'
    },
    {
        name:'智慧燃气',
        message:'杠杠的',
        dateTime:'2019年3月15日'
    }
]

http.createServer(function (req,res) {
    //res.end('hello')
    //var url = req.url;
    //解析路径
    var pathObj = url.parse(req.url,true);
    var pathName = pathObj.pathname;
    console.log(pathObj)
    if (pathName === '/'){
        fs.readFile('../views/words.html',function (error,data) {
            if (error){
                return res.end('words-404');
            }
            var htmlStr = template.render(data.toString(),{
                comments:comments
            })
            res.end(htmlStr);
        })
    }else if (pathName.indexOf('/public/')=== 0 ){
        fs.readFile('..'+pathName,function (err,data) {
            if (err){
                return res.end('css-404')
            }
            res.end(data)
        })
        console.log(pathName);
    }else if(pathName==='/post'){
        fs.readFile('../views/post.html',function (error,data) {
            if (error){
                return res.end('post-404')
            }
            res.end(data)
        })
    } else {
        fs.readFile('../views/404.html',function (err,data) {
            if (err){
                return res.end('404-找不不到页面！');
            }
            res.end(data);

        });
    }
}).listen(3002,function () {
    console.log('server start...')
});