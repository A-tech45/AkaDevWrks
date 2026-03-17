// LOGIC 
// First find the multiple 
// Then finf the largest among the multiple
// Print largest multiple

let m = 2
let a = 1
let b = 10
let lrg = 0
for (a; a <= b; a++) {
     if (a % m == 0) {
          if (a > lrg) {
               lrg = a
          }
     }
}
console.log(lrg)
