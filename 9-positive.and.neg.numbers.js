let arr = [ -1 , -2 , -3 , 1 , 2 , 3];
let pos = 0 ;
let neg = 0 ;

for(let num of arr){
    if(num >= 0){
        pos++;                       //Same logic as even odd  
    }
    else{
        neg++;
    }
}
console.log(pos)
console.log(neg)