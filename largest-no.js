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