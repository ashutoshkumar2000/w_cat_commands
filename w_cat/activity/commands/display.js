//complete
function displayFn(dirPath){
    let cmd = dirPath;
    display(cmd);
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

function display(cmd){
    let checkFile = isFileorNot(cmd);
    if(checkFile == true){
        for(let i = 0; i < cmd.length; i++){
            let data = fs.readFileSync(cmd[i], 'utf-8');
            console.log("\n","-----------------------------------------------------file no."+(i+1)+" below-----------------------------------------------------", "\n")
            console.log(data);
        }
    }
    else{
        console.log("File can't be read!");
    }     

}

module.exports = {
    displayFn : displayFn
}