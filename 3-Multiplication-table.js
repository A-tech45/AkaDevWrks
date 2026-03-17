const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your number: ", (num) => {
    num = Number(num);
    for (let i = 1; i <= 10; i++) {
        let value = num * i;
        console.log(`${num} x ${i} = ${value}`);
    }
    rl.close();
});
