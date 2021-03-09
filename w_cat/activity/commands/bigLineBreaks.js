//complete
function bigLineBreaksFn(dirPath){
    cmd = dirPath;
    readFile(cmd);
}

let fs = require("fs");

function isFileorNot(cmd){
    flag = true;
    for(let i = 0; i < cmd.length; i++){
        if(fs.lstatSync(cmd[i]).isFile() == false){
            console.log("This directory doesn't point to a file -> ", cmd[i]);
            flag = false;
            break;
        }
    }
    return flag;
}

function readFile(cmd){
    let fileCheck = isFileorNot(cmd);
    if(fileCheck == true){
        let data = "";
        let count = 0;
        for(let i = 0; i < cmd.length; i++){
            data += "\n-----------------------------------------------------file "+(i+1)+" below-----------------------------------------------------\n";
            data += fs.readFileSync(cmd[i], 'utf-8');
            count++;
        }        
        data = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
        console.log(data);
    }
    else{
        console.log("Correct the path or exit the program");
    }
    
}

module.exports = {
    bigLineBreaksFn : bigLineBreaksFn
}