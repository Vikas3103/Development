const fs = require('fs');

const operation = process.argv[2];
//write operation
if(operation == 'write'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    console.log(operation,name,content);
    fs.writeFileSync(fullName,content);
}

// read operation
else if(operation == 'read'){
    const name = process.argv[3];
    // const content = process.argv[4];
    const fullName = "files/"+name+".txt";
   
    let data = fs.readFileSync(fullName,"utf-8");
    console.log(data);
}

//update operation
else if(operation == 'update'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    let data = fs.appendFileSync(fullName,content);
    console.log(data);
}

//delete operation
else if(operation == 'delete'){
    const name = process.argv[3];
    const fullName = "files/"+name+".txt";
    fs.unlinkSync(fullName);
    console.log("File deleted successfully");
}

//other
else{
    console.log("Invalid operation");
}
// console.log(process.argv[2]);

// fs.writeFileSync("files/banana.txt","This is a fruit");

// fs.unlinkSync("files/banana.txt");

// const data = fs.readFileSync("files/apple.txt","utf-8");
// console.log(data);

// fs.appendFileSync("files/apple.txt","\nThis is good for health");
