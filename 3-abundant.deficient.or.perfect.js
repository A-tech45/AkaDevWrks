//logic 
// abundent = sum of devisirs > num   / perfect = sum of devisirs == num     / deficient = sum of devisirs < num 
// just compare the sum of the divisors and compare with original number   

let n = 7
let sum = 0
for( let i = 1 ; i < n ; i++){
    if( n % i === 0){                                                                 //checks the divisors
        sum = sum + i                         // stores the sum of the divisors 
    }
}
if (sum === n){                            //comapre if the divisors are equal to the original number
    console.log("Perfect number")
}
else if(sum > n){
    console.log("Abundent number")
}
else if(sum < n){
    console.log("Defecient number")
}
else{
    console.log("Normal number")
}