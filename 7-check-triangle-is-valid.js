

// --->>> TO check a triangle is valid the sum of its interior angle should be 180 deg and none of the angkle should be 0    <<---

let angA = 50;
let angB = 60;
let angC = 60;
let SA = angA + angB + angC;
if (SA === 180 && angA > 0 && angB > 0 && angC > 0) {
    console.log("It is a triangle");
}
else {
    console.log("Its not triangle");
}