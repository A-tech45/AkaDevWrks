let str = "akash"
let arr = [ "a" , "e" , "i" , "o" , "u" ]
let vow = 0
let cons = 0
 for(let i = 0 ; i < str.length ; i++){
        
    if(arr.includes(str[i])){
        vow++
    }
    else {
        cons++
    }
 }
 console.log("vowel = ",vow);
 console.log("consonent = ",cons);