
//    LOGIC OF THE PROGRAMME

        //  find the divisors of the number 
        //  check if the sum of divisors is = to number
        //  if equal then perfect no 
        //  end





let num = 27;
let sum = 0;
for (let i = 1 ; i < num ; i++) {
    if (num % i === 0) {
        sum = sum + i;
    }
}
if(sum === num){
    console.log(num,"Perfect no ")
}
else{
    console.log(num,"Not a perfect no ")
}