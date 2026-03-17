{
    let num = 3243
let sum = 0

 
for(; num > 0 ;){              //using for loop

   let rem = num % 10 

    num = Math.floor(num/10)       //can be done with while loop also

 sum = rem + sum
} 
console.log(sum)
}


// using while loop

{
    let num = 32411
let sum = 0

 
while( num > 0 ){

   let rem = num % 10 

    num = Math.floor(num/10)       //can be done with while loop also

 sum = rem + sum
} 
console.log(sum)
}