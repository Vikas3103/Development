const http = require('http');

let age = 25;

const server =http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','text/html');// for sending html response to browser
    resp.write("<h1>Hello Vikas Maurya</h1>\n");
    resp.write("<h2>Hello Vikas Maurya</h2>\n");

    resp.write(`
        <html>
        <head><title>My First Page</title></head>
        <body>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <p>This is my paragraph</p>
        <h3>My age is ${age}</h3>
        <h1>`+new Date()+`</h1>
        </body>

        </html>
        
        `)
    resp.end();
    // process.exit(); // to stop the server after one response

});
server.listen(4800);