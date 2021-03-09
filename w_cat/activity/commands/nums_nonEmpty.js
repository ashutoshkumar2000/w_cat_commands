//complete
function nums_nonEmptyFn(dirPath){
    let cmd = dirPath;
    nums(cmd);
}


// let input = process.argv.slice(2);
// let cmd = [];
// for(let i = 0; i < input.length; i++){
//     cmd[i] = input[i];
// }
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
            dataSet[i] += " ";
        }
        let count = 0;
    for(let i = 0; i < dataSet.length; i++){
        if(dataSet[i].length > 1){
            dataSet[i] = (count+1) +"|     "+ dataSet[i];
            count++;
        }
        }        
        for(let i = 0; i < dataSet.length; i++){
            console.log(dataSet[i]);
        }
    }
}

module.exports = {
    nums_nonEmptyFn : nums_nonEmptyFn
}