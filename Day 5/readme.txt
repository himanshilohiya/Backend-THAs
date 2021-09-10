var fs = require("fs");                 //accessing/requiring the file system       

fs.mkdirSync("HL");                   //creating the folder --> HL
fs.writeFileSync("HL/hello.txt","Hello from demo",(err) => {           //creating the file --> hello
    if(err){
        console.log(err);
    }
});

var data = fs.readFileSync("HL/hello.txt","utf-8");                    //reading the file hello.txt and fetching it in data
console.log(data);                                                       //printing data

fs.appendFileSync("HL/hello.txt",",this is the appended text");           //appending some text in hello.txt file
data = fs.readFileSync("HL/hello.txt","utf-8");
console.log(data);

fs.renameSync("HL/hello.txt","HL/hello2.txt");                          //renamed the file

fs.unlinkSync("HL/hello2.txt");                                           //file deleted

fs.rmdirSync('HL');                                                       //folder/schema deleted