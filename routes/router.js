var fs = require('fs');
var express = require('express');

//1、创建路由容器
var router = express.Router();

//2、把路由挂载到router路由容器中
    router.get('/',function (req,res) {
        //res.send('hello!');
        fs.readFile('../db.json','utf8',function (err,data) {
            if (err){
                console.log('error')
            }else {
                console.log('文件数据：'+data);
                res.render('../../views/stu_index.html',{
                    fruits:[
                        'apple',
                        'banana',
                        'orage'
                    ],
                    students:JSON.parse(data).students
                });
            }
        });

    });

    //3、把router导出
module.exports = router;