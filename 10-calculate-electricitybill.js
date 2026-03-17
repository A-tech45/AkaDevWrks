const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your Units: ", (units) => {
  units = Number(units)
  rl.close();


//let units = 119 

let bill = 0;

if (units <= 100) {

    bill = (units * 3);
}
else if(units <= 200) {

    bill = (100 * 3) + (units - 100) * 5;

}
else if(units <= 300){
    bill = (100 * 3) + (100 * 5) + (units - 200)*7 ;
}

else{
    bill = (100 * 3) + (100 * 5) + (100 * 7) + (units - 300)*10 ;

}

console.log(bill) });
