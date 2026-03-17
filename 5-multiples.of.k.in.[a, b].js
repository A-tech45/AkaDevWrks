//5.	Given a and b, print the count of multiples of k in [a, b] (user gives k).

  //   --->>>> LOGIC
     // declare a = initial value
     // b = final value 
     // k = user input 
     // count for counting 
     // run the loop   from a to b
     // check if a % k === 0 
     // if yes count++
     // print count


   let a = 1
  let b = 10
  let k = 2
  let count = 0
   for( a ; a <= b ; a++){

    if( a % k === 0){
        count++
    }
   }
   console.log(count)