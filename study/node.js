var http = require('http');      //node에 내장된 http 모듈 사용
var fs = require('fs');
var hostname = '127.0.0.1';    //호스트 주소
var port = 3000;                 //포트번호

http.createServer(function(req, res){ 
    var url = req.url;
    if(req.url == '/'){
      url = '/vue.html';	// 실행할 url
    }
    if(req.url == '/favicon.ico'){
      return res.writeHead(404);
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'}); 
    res.end('Hello World\n'); 
}).listen(port, hostname); 

console.log('Server running at http://' + hostname + ':' + port);
