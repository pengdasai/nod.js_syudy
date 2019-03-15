var template = require('art-template');

var res = template.render('hello {{name}}',{
    name:'新开普'
});
console.log(res);
