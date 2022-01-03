//blocking code method

var fs = require('fs');
const para = fs.readFileSync('file.txt','utf-8');
console.log(para);

//non-blocking code method
fs.readFile('file.txt','utf-8',(err,data) =>{
    console.log(data);
});
console.log('Reading File')