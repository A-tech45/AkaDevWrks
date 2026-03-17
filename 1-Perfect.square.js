// 1.	Given n, print YES if n is a perfect square, else NO.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number: ", (num) => {
         
    root = Math.sqrt(num)
            if( root % 1 === 0){       //checks the number is integer if (decimal %1 !== 0) no perfect sqare
                console.log("Perfect square :")
            }
     else{
        console.log("Its not a perfect square :")
     }
  rl.close();


});

//let n = 25                                      --->> One line function to check perfect square 
//console.log(Number.isInteger(Math.sqrt(n)))