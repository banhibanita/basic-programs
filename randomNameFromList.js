/** Function to select a random name from the list of name . The person selected will have t pay for everybody's food bill */
eg. Input = ["Angela","Ben","Jenny","Michael","Chloe"]
Output = Chloe is going to buy lunch today!
**/

function whoisPaying(names){
var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random()*numberOfPeople)
var randomPerson = names[randomPersonPosition];
return `${randomPerson} is going to buy lunch today!`
}



Output with any random array :
whoisPaying(["Angela","Ben","Jenny","Michael","Chloe"])
"Chloe is going to buy lunch today!"
