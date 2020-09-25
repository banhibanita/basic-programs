/* FizzBuzz program solution */
Programs that prinst serial numbers , but for multiples of 3 it prints "Fizz" instead of the number and for multiples of five it pronts "Buzz" . 
For numbers which are multiples of both three and five print "FizzBuzz".



var result = []
var count =1

function fb(){
    
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
    
    else
    result.push(count);
    count++
    
}
