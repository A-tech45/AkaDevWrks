let year = 2000
if (year % 4 === 0 ){
    console.log("Its a leap year")
}
else if ( year % 400 == 0){
    console.log("Its a century year")
}
else{
    console.log("Its a normal year")
}