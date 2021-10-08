const fs = require("fs");

fs.writeFile("dcs.txt","Welcome to DCS,VNSGU!",function(err,result){
if(err){
    console.log(err);
}
else{
    console.log("File saved...");
}
});

