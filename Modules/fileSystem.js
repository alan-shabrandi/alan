const fs = require('fs');

fs.writeFile('../public/myFile.txt', 'I am a good programmer' , (err)=>{
    if(err){
        console.log(err);
    }
})