var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    querystring = require('querystring');

http.createServer(function(req, res){
	
	//把url解析成对象
	var urlObj = url.parse(req.url);
	
	//判断
	if(urlObj.pathname === '/login'){
		//使用querystring来解析参数
		var params = querystring.parse(urlObj.query);
		//根据参照值，返回不同的数据
		if(params.username === 'admin' && params.pwd === '123'){
			res.end('ok');
		}else{
			res.end('fail');
		}
		
	}
	
}).listen(9999, '127.0.0.1', function(){
	console.log('启动成功');
})
