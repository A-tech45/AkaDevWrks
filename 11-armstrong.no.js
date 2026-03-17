let num = 153
let no = num ;           // no will store the value of num becuase the no will be destroyed in 1oop
let len = num.toString().length       //converts the no into string to display its length
let sum = 0 ;
console.log(len)

while(no > 0) {

              let ld = no % 10                   //The last digit will be stored in ld
              sum = sum + ld ** len ;        // here sum = 0(sum = 0 initially defined) + 3(last digit) ^ 3(length of the number)
              
              no = Math.floor(no/10)          //this will remove the last digit ( Eg-153  then ld = 153 / 10 = 15.3 so Math.floor removes .3 and makes the no 15)
//console.log(sum)
}
if(sum === num){                         // Checks that sum is equal to the original num 
    console.log("its an armstrong no")
}
else{
    console.log("Its not an armstrong no")
}
