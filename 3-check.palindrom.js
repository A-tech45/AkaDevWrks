let str = "operrepo"
let rev = "";

for (let i = str.length-1 ; i >= 0 ; i-- ){

    rev = rev + str[i];
}
if( str == rev){
    console.log("palindrome");
}
else{
console.log("Not a plaindrome")
}