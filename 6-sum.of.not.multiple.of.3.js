//print the count of multiples of k in [a, b] (user gives k).

// same logic as 5 but just check  num not divisible by 3 and add the  result

     let a = 1
  let b = 10
  let k = 3
  let sum = 0
   for( a ; a <= b ; a++){

    if( a % k !== 0){
        sum = sum + a
    }
   }
   console.log(sum)