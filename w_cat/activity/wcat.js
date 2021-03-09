/*-----Main File to interact with terminal----------*/

let {displayFn} = require("./commands/display");
let {bigLineBreaksFn} = require("./commands/bigLineBreaks");
let {nums_allFn} = require("./commands/nums_all");
let {nums_nonEmptyFn} = require("./commands/nums_nonEmpty");
let {numsAll_lineBreak} = require("./commands/_n_s");
let {nums_nonEmpty_lineBreakFn} = require("./commands/_b_s");
let fs = require("fs");

//---------------------------------input from command_prompt--------------------------------
let input = process.argv.slice(2);

//----------------------------------cmd2 takes the input------------------------------------
let cmd2 = [];
for(let i = 0; i < input.length; i++){
    cmd2[i] = input[i];
}

//------------------------cmd_sp1 checks for specialized inputs.----------------------------
let cmd_sp1 = "";
if(cmd2[0].length < 3){
    cmd_sp1 = cmd2.shift();
}

if(cmd2.length != 0 && cmd2[0].length < 3){
    cmd_sp1 += " " + cmd2.shift();
}


//-------------------------------Check for valid directory----------------------------------
function directoryExists(dirPath){
    let flag = true;
    let count = 0;
    if(dirPath.length == 0 && cmd_sp1 != "-h"){
        console.log("Please enter a directory path");
        return "nopath";
    }
    for(let i = 0; i < dirPath.length; i++){
        if(fs.existsSync(dirPath[i])){/*do nothing and continue*/}
        else{
            flag = false;
            console.log("This directory is messed up ->", dirPath[i]);
            break;
        }
        count++;
    }
    if(flag == true && count == 1)  return "path";
    else if(flag == true && count >= 2) return "multiPath";
    else    return "nopath";    
}
let check = directoryExists(cmd2);

//---------------------------------call for functions---------------------------------------
switch(cmd_sp1){
    case "":
        switch(check){
            case "path" :
                displayFn(cmd2);
                break;
            case "multiPath" :
                displayFn(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    case "-s":
        switch(check){
            case "path" :
                bigLineBreaksFn(cmd2);
                break;
            case "multiPath" :
                bigLineBreaksFn(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    case "-n":
        switch(check){
            case "path" :
                nums_allFn(cmd2);
                break;
            case "multiPath" :
                nums_allFn(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    case "-b":
        switch(check){
            case "path" :
                nums_nonEmptyFn(cmd2);
                break;
            case "multiPath" :
                nums_nonEmptyFn(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    case "-h":
        console.log(`                     1- node wcat.js filepath => displays content of the file in the terminal 
                     2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in the given order.
                     3- node wcat.js -s filepath => convert big line breaks into a singular line break
                     4- node wcat -n filepath => give numbering to all the lines 
                     5- node wcat -b filepath => give numbering to non-empty lines`);
        break;
    case "-n -s":
    case "-s -n":
        switch(check){
            case "path" :
                numsAll_lineBreak(cmd2);
                break;
            case "multiPath" :
                numsAll_lineBreak(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    case "-b -s":
    case "-s -b":
        switch(check){
            case "path" :
                nums_nonEmpty_lineBreakFn(cmd2);
                break;
            case "multiPath" :
                nums_nonEmpty_lineBreakFn(cmd2);
                break;
            case "nopath" :
                break
            default:
                console.log("Enter the appropriate command or type '-h' for help");
                break;
        }
        break;
    default:
        console.log("Enter the appropriate command or type '-h' for help");
        break;
}
