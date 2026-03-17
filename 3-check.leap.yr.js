let strt = 0
let end = 1000
    for( let yr  = strt ; yr <= end  ; yr++){
if (yr % 400 === 0) {

    console.log("its a leap year " ,yr)
}
else if (yr % 100 == 0) {
  console.log("its not a leap year" , yr)
}
else if (yr % 4 === 0) {
    console.log("Its a leap yr" , yr)
}

}