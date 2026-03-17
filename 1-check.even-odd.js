let even = 0;
let odd = 0;
let arr = [ 1 , 3 , 2 , 4 , 5 , 6 , 7 , 8 , 9 , 11 , 12 , 32 , 15 ];
   for(let num of arr){
                if(num % 2 == 0){     //<<--  Checks if the no is even or odd
                    even ++;
                }
                    else{
                        odd ++;
                    }
   }
   console.log( "The total even no is", even );
   console.log( "The total odd no is", odd );