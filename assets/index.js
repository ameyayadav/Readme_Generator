console.log(process.argv);
// importing few packages such as fs and inquirer

const fs = require("fs") 
// const inquirer =  require("inquirer")  
import inquirer from "inquirer";

inquirer.prompt([
    {
    type:'input',
    message: "What is your name ?",
    name:"name",

}
]); 