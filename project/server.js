var express = require('express');
//用express创建app对象
var app = express();

//根据不同路径，进行不同的数据返回
app.get('/', function(req, res){
	res.send('home page');
});
app.get('/login', function(req, res){
	res.send('login page');
});
//匹配其他
app.get('*', function(req, res){
	res.send('404 page');
});

//设置端口
app.listen(9999, '127.0.0.1',function(){
	console.log('server running on port 9999');
})
