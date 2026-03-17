//  4.	Given a and b (a ≤ b), print the count of even numbers in [a, b]. [a , b]-->> means including both

  //LOGIC :
  
  // input two numbers 
  // run loop from a to b  for( let i = a ; i < b ; i++)
  // check comdition a % 2 === 0
  // if true coutn the numbers 


    let a = 3
    let b = 100
    let count = 0
    for( let i = a ; i <= b ; i++){

        if( i % 2 === 0 ){
            count++
        }
    }
    console.log(count)