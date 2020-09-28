/* FizzBuzz program solution */
Programs that prints serial numbers upto 100, but for multiples of 3 it prints "Fizz" instead of the number and for multiples of five it pronts "Buzz" . 
For numbers which are multiples of both three and five print "FizzBuzz".


    while(count<100){

   
    if ((count%3 ===0) && (count%5 ===0)){
        result.push("FizzBuzz")
    }
    else if 
    (count%5 ===0){
        result.push("Buzz")
    }else if 
    (count%3 ===0){
        result.push("Fizz")
    }
    
    else {
        result.push(count);
    }
    
    count++

    }

    console.log(result)
}
