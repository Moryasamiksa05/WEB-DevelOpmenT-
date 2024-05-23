let rand = Math.random()
    let first,second,third;
//generate the first word
    if(rand<0.33){
        first="Amazing"

    }
    else if(rand<0.66 && rand>=0.33){
        first="Amazing"
    }
    else{
     
     //generate the second word   
    }
    if(rand<0.33){
        second="Engine"

    }
    else if(rand<0.66 && rand>=0.33){
        second="Foods"
    }
    else{
        second="Garments"
    }
    //generate the third word
    if(rand<0.33){
        third="Bros"

    }
    else if(rand<0.66 && rand>=0.33){
        third="Limited"
    }
    else{
        third="Hub"
    }

    console.log('${first} ${second} ${third}')
 