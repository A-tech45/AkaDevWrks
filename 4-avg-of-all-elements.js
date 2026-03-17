let arr = [ 1 , 4 , 4 ]
let sum = 0 ;

for(let no of arr){
    sum = no + sum ;
}
let avg = (sum/arr.length)
console.log(sum)
console.log(avg)