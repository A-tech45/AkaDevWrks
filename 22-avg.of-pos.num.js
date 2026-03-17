{
    let x = 0;
    let sum = 0;
    let gum = 0;
    let arr = [2, -3, -2, 0, 0, -4, -7, -5, 9, 3, 5];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < 0) {
            sum = sum + num;                //average  of all negetive numbers
            x++;
            gum = sum / x;
        }
    }

    console.log(`The average of neg no is :${gum}`);
    console.log(`total negetive are ${x}`);
}

{
    let x = 0;
    let sum = 0;
    let gum = 0;
    let arr = [2, -3, -2, 0, 0, -4, -7, -5, 9, 3, 5];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > 0) {
            sum = sum + num;         // average of all positive numbers
            x++;
            gum = sum / x;
        }
    }

    console.log( "The average of pos no is : ", gum);
    console.log(`total positive are ${x}`);
}