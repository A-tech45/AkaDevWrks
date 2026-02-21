 {let sum = 0;
let arr = [ 2 , 3 , 4 , 5 , 8 , 4];
    for( let ele of arr){
        sum = sum + ele ;                               /* USING FOR OF LOOP*/ 
    }
    console.log(sum);}

   { let sum = 0 ; 
    let arr = [ 2 , 3 , 4 , 5 , 8 , 4];
    for(let i = 0 ; i < arr.length ; i++){              /* USING FOR  LOOP*/ 
        const num = arr[i];
        sum = sum + num ;
    }
    console.log(sum)}