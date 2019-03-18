var express = require('express');

var app = express();

app.get('/',function (req,res) {
    res.send('hello send!')
})

app.listen(3004,function () {
    console.log('express hello!')
})