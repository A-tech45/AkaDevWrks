{
    let arr = [2, 4, 6, 8, 10 , 1 , 5 , 3 , 21];
let large = 0;
for (let no of arr) {
    if (large < no) {                // using for off loop
        large = no;
    }
}
console.log(large);
}

{
    let arr = [2, 4, 6, 8, 10 , 9 , 5 , 3 , 21];
let small = arr[0];                                      //assuming first element is the smallest 
for (let no of arr) {
    if (small > no) {                // using for off loop
        small = no;
    }
}
console.log(small);
}