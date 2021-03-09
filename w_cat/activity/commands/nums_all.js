//complete
function nums_allFn(dirPath){
    let cmd = dirPath;
    nums(cmd);
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

function nums(cmd){
    let checkFile = isFileorNot(cmd);
    let data = "";
    if(checkFile == true){
        for(let i = 0; i < cmd.length; i++){
            data += fs.readFileSync(cmd[i], 'utf-8')+"\n";
         }
        let dataSet = data.split(/\r?\n/);
    for(let i = 0; i < dataSet.length; i++){
        if(i < 9)
            dataSet[i] = (i+1) +" | "+ dataSet[i];
        else{
            dataSet[i] = (i+1) +"| "+ dataSet[i];
            }
        }        
        for(let i = 0; i < dataSet.length; i++){
            console.log(dataSet[i]);
        }
    }
}

module.exports = {
    nums_allFn : nums_allFn
}