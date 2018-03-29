
// date
var today = new Date();
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[today.getMonth()];
document.getElementById("date").innerHTML= n+". &nbsp;" + today.getDate();
// cursor
var counterCursor = 0;

function blinkCursor () {

if((counterCursor%2)==0){
    document.getElementById("blink").innerHTML= "&nbsp;";
}
else {
    document.getElementById("blink").innerHTML= "|";
}

counterCursor++;

}
setInterval(blinkCursor, 500); // Time in milliseconds

// // slide ************************






// var myIndex = 1;
// carousel();

// function carousel() {
// var i;
// var x = document.getElementsByClassName("slide");
// // alert("slide length is: " + x.length);
// for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
// }

// if (myIndex == 6) {myIndex = 1} 
// // slide animation
// for (var j = 0; j < (x.length-1); j++) {
//     x[j].classList.add('w3-animate-right');
//     x[j].classList.remove('w3-animate-left');
// }
// for (var j = (x.length-1); j > myIndex; j--) {
//     x[myIndex].classList.add('w3-animate-right');
//     x[myIndex].classList.remove('w3-animate-left');
// }



// // display
// if(myIndex >= 2){
//     x[myIndex-1].style.display = "block";  
//     x[myIndex-1].style.height = "80px"; 
// }
// else {
//     x[0].style.display = "block"; 
// }

// x[myIndex].style.display = "block";  
// x[myIndex].style.height = "120px"; 

// if(myIndex < 6){
//     x[myIndex+1].style.display = "block";
//     x[myIndex+1].style.height = "80px";  
// }
// else {
//     x[6].style.display = "block"; 
// }

// myIndex++; 
// setTimeout(carousel, 3000);
// }

// // // Change image every 2 seconds

