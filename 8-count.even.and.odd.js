let arr = [ 1, 2, 3, 4, 5, 6, 7];
let even = 0;
let odd = 0;

for (let num of arr) {
    if (num % 2 === 0) {       // checks even 
        even++;             // if even the value of count increases
    }
    else {             //else odd
        odd++;                   // odd count increases
    }
}
console.log(even);
console.log(odd);