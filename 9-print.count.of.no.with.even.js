let a = 123
let x = a
let b = 145
let count = 0
let num = 0
for(a ; a <= b ; a++){
    if(a > 0){
        count++
        a = Math.floor(a/10)
    }
}
console.log(count)