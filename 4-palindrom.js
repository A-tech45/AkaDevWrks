function pal(a) {
    let rev = 0;
    let n = a
    let temp = a.toString().length;
    //console.log(temp)

    while (a > 0) {
        rev = rev * 10 + (a % 10)
        a = Math.floor(a / 10);

    }
    if (rev === n) {
        console.log("Palindrome")
    }
    else {
        console.log("Not Palindorme")
    }



}
pal(1221)