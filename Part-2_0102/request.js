const http = require('http');
http.createServer((req,resp)=>{
    console.log(req.method);

    if(req.url == "/"){
        resp.write("<h1>Home Page </h1>\n");
    }
    else if(req.url == "/login"){
        resp.write("<h1>Login Page </h1>\n");
    }
    else if(req.url == "/contact"){
        resp.write("<h1>Contact Page </h1>\n");
    }
    else{
        resp.write("<h1>404 Not Found</h1>\n");
    }

    resp.end();

}).listen(5600);