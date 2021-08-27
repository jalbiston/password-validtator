let greeting = "Hello User"
console.log(greeting)

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What is your password", function(answer) {
    if(answer.length >= 10 ){
        console.log("success")
    } else {
        console.log("failure")
    }
}