function larg( a , b , c){

console.log(Math.max(a,b,c))        // By built  in function Math.max( )
}
larg( 2 , 4 , 9)


// By using conditional statement

function lrg( a , b , c){
      
     if ( a > b && a > c){
        console.log("a is the greatest" , a);
     }
     else if ( b > a && b > c){
        console.log("b is the greatest", b)
     }
     else{
        console.log("c is the greatest", c)
     }
}

lrg( 2 , 9 , 4)