const http = require('http');

const fs = require('fs');

const querystring = require('querystring');
http.createServer((req,resp)=>{

    fs.readFile(`html/form.html`,`utf-8`,(err,data)=>{
        
        if(err){
            resp.writeHead(500,{'Content-Type':'text/html'});
            resp.write("internal server error");
            return;
        }
        resp.writeHead(200,{'Content-Type':'text/html'});
        if(req.url == "/"){
            resp.write(data);
        }else if(req.url == "/submit"){

            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                const rawData = Buffer.concat(dataBody).toString();
                let readableData = querystring.parse(rawData);
                console.log(readableData); // This will log the form data in key=value format
                let dataString = "My name is "+readableData.name+" and my email is "+readableData.email;
                console.log(dataString);

                // fs.writeFileSync("text/"+readableData.name+".txt",dataString);
                // console.log("File created successfully");

                fs.writeFile("text/"+readableData.name+".txt",dataString,(err)=>{
                    if(err){
                        console.log("Internal Server Error");
                        return;
                    }
                    console.log("File created successfully");
                });


            });

            resp.write("<h1>Form Submitted Successfully</h1>");
        }
        resp.end();
    })
    
}).listen(4800);









// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'text/html'});
//     console.log(req.url);
//     if(req.url == "/"){
//         resp.write(`
        // <form action = "/submit" method="POST">
        //     <input type="text" placeholder="enter name" name = "name">
        //     <input type="text" placeholder="enter email" name = "email">
        //     <button>Submit</button>
        // </form>
//         `);
//     }
//     else if(req.url == "/submit"){
//         resp.write("<h1>Form Submitted Successfully</h1>");
//     }

//     resp.end();



// }).listen(4800);