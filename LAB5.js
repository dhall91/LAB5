

var today= new Date();
var hourNow = today.getHours();
var greeting;


var firstname = prompt("Enter Firstname here.");
var confirmation = confirm("Are you sure " +firstname+ " is correct?");



if (hourNow >= 18 && confirmation == true){
greeting= 'Good evening! ' + firstname;
}else if (hourNow > 18 && confirmation != true) {
    greeting= 'Good evening! ' + "Welcome Unknown";
}else if (hourNow > 12 && confirmation == true) {
    greeting= 'Good Afternoon! ' + firstname;
}else if  (hourNow > 12 && confirmation != true) {
greeting = ' Good Afternoon! '+ "Welcome Unknown";
}else if (hourNow > 0 && confirmation == true) {
greeting = 'Good morning! '+ firstname;
}else if (hourNow > 0 && confirmation != true) {
greeting = 'Good morning! '+ "Welcome Unknown";
}else {
greeting = 'Welcome! ' ;
}
document .write( ' <h3>' +greeting + ' </ h3> ');