const http = require('http');

const userData = [
    {
        name : "Vikas Maurya",
        age  : 25,
        city : "Lucknow",
        email : "vikas.maurya@example.com"
    },
    {
        name : "Anjali Sharma",
        age  : 28,
        city : "Delhi",
        email : "anjali.sharma@example.com"
    },
    {
        name : "Rohit Singh",
        age  : 30,
        city : "Mumbai",
        email : "rohit.singh@example.com"
    }
]
http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'application/json');

    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6100);