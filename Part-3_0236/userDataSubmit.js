
const querystring = require('querystring');
function userDataSubmit(req,resp){

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
                        });

    resp.write(`
         <h1>You can get data from user form here </h1>
        `);

}
module.exports = userDataSubmit;