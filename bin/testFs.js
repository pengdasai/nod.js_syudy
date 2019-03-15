//读取文件
const fs = require('fs');
fs.readFile('D:\\nodejsCode\\testFS.txt',function (error,data) {
    if (error){
        console.log('读取失败！')
    }else {
        console.log(data.toString());
    }
});

//写文件
var fs = require('fs');
//成功：error是null。失败：error是失败对象。
fs.writeFile('./testWrite.txt','我是写文件哦',function (error) {
    if (error == null){
        console.log('success')
    }else {
        console.log('fail');
    }

})