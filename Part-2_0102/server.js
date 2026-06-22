const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello World</h1>\n");
    resp.write("Welcome to Node Server Vikas Maurya\n");
    resp.end("Hello from node server"); // end the response is mandatory

}).listen(4800);

http.createServer((req,resp)=>{
    resp.write("<h1>Hello World</h1>\n");
    resp.write("Welcome to Node Server-2 Vikas Maurya\n");
    resp.end("Hello from node server-2"); // end the response is mandatory

}).listen(5800);