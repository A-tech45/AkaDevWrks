function arm( x ){
    let ar = 0
    let org = x
       let temp = x.toString().length;
       while( x > 0){
        let num = x % 10
         ar = ar +  num ** temp 

         x = Math.floor(x/10)
       }
       if(ar === org){
        console.log("Armstrong no")
       }
       else {
        console.log("Non armstrong no")
       }
}
arm(153)