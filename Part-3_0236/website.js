
const http = require('http');
const fs = require('fs');

http.createServer((req,resp)=>{


    //============
    let collecrHeaderData = fs.readFileSync("html/header.html","utf-8");
//     if(req.url == "/"){
//         fs.readFile("html/header.html","utf-8",(error,headerData)=>{
//         if(error){
//             resp.writeHead(500,{'Content-Type':'text/plain'});
//             resp.end("Internal Server Error");
//             return false;
//         }

//         collecrHeaderData = headerData;

//         // resp.write(headerData);

//         // resp.end();
//     });
// }


    //============
let file = "/home";
if(req.url != "/"){
    file = req.url;
}


    if(req.url != "/style.css"){
        fs.readFile("html/"+file+".html","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(500,{'Content-Type':'text/plain'});
            resp.end("Internal Server Error");
            return false;
        }

        resp.write(collecrHeaderData+""+data);

        resp.end();
    });
    } else if(req.url == "/style.css"){
        fs.readFile("html/style.css","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(500,{'Content-Type':'text/plain'});
            resp.end("css file not found");
            return false;
        }
         resp.writeHead(200,{'Content-Type':'text/css'});
        

        resp.end(data);
    });
    }
    


    
    
}).listen(3200);