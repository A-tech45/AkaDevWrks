let num = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 ];
      for(let i = 0 ; i < num.length ; i++){
        const no= num[i];
        if(no % 2 === 0){
                console.log(no ,"even");
        }
            else{
                console.log(no , "odd");
            }
        
      }
       
      //using for of loop
      for (let no of num){
        if(no % 2 === 0)
        {
            console.log( no , " even");
        }
        else{
            console.log(no , "odd");
        }
      }