let y = 0 ;
let z = 0 ;
let x = 0;
let arr = [ 2 , -3 , -2 , 0 , 0 , -4];
for(let i = 0 ; i < arr.length ; i++){
   if( arr[i] < 0){
     x ++;
   }
   else if( arr[i] === 0 ){
    y ++ ;
   }
   else if (arr[i] > 0){
    z ++ ;
   }
}
console.log(`There are ${x} negatives ${y} zeros ${z} positives`);