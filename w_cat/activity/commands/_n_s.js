//complete
function numsAll_lineBreak(dirPath){
    let cmd = dirPath;
    numsBreak(cmd);
}
let fs = require("fs");

let input = process.argv.slice(2);
let cmd = [];
for(let i = 0; i < input.length; i++){
    cmd[i] = input[i];
}

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

function numsBreak(cmd){
    let checkFile = isFileorNot(cmd);
    let data = "";
    if(checkFile == true){
        for(let i = 0; i < cmd.length; i++){
            data += fs.readFileSync(cmd[i], 'utf-8')+"\n";
            data = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
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
    numsAll_lineBreak : numsAll_lineBreak
}