let arr = [ 2 , 300 , 4 , 50 , 90 ];
let largest = -1 ;
let secondl = -1;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > largest){                          
        secondl = largest;
        largest = arr[i];
    }
    else if(arr[i] > secondl && arr[i] !== largest){          
        secondl = arr[i];
    }
}
console.log(secondl)