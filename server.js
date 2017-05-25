//引入模块
var http = require('http');
//引入操作文件的模块
var fs = require('fs');
//操作url的模块
var url = require('url');
//创建服务，并设置端口
http.createServer(function(request, response){
//	//返回头部信息  plain 返回字符串    html为 标签
//	response.writeHead(200,{'Content-Type':'text/html'});
//	//返回内容信息
//	var data = {
//		err:"0",
//		msg:'ok',
//		data:['iPhone','iPod','iMac','iPod']
//	}
//	response.write('<h1>啊哈哈哈哈哈哈</h1>');
//	//结束返回
//	response.end();
   //首先使用方式模块读取数据，然后使用response返回数据
// fs.readFile('index.html', function(err, data){
// 	 response.writeHead(200, {'Content-Type': 'text/html'});
// 	 response.end(data);
// })
   //创建读取流,进行数据的读取，并交给response
// fs.createReadStream(`${__dirname}/index.html`).pipe(response);
  
   //使用url，对url进行解析
   var urlObj = url.parse(request.url);
   console.log(urlObj);
   
   //获取路径通过url.parse()方法进行解析，可以筛选掉参数部分
   
   var pathname = urlObj.pathname;
   var fileName = '';
   if(pathname === '/'){
   	 fileName = 'index';
   }else if(pathname === '/about'){
   	 fileName = 'about';
   }else if(pathname === '/login'){
   	 fileName = 'login';
   }else{
   	fileName = '404';
   }
   fs.createReadStream(`${__dirname}/public/${fileName}.html`).pipe(response);
   
}).listen(8080, '127.0.0.1',function(){
	console.log('Server running on port 8080');
});
