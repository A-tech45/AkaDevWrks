{let sum = 0;
let arr = [ 1 , 2 , 3 , 4, 5 , 6, 7 , 8 , 9 , 10 , 11 , 12]
for(let i = 0 ; i< arr.length ; i ++){
      const num = arr[i];                                    // SUM OF Even numbers
       if (num % 2 == 0){
          sum = sum + num ;
      }
}
console.log(  "The sum of all even numbers are : " , sum);}



{let sum = 0;
let arr = [ 1 , 2 , 3 , 4, 5 , 6, 7 , 8 , 9 , 10 , 11 , 12]               // SUM OF ODD NO
for(let i = 0 ; i< arr.length ; i ++){
      const num = arr[i];
      if (num % 2 !== 0){
          sum = sum + num ;
      }
}
console.log( "The sum of all Odd numbers are : " , sum );
}