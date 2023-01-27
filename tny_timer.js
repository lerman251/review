"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author:leeman 
   Date:1/24/23   

*/
showClock();
setInterval("showClock()", 1000)

function showClock() {

   //store time and date
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   
   //display the time and date
   document.getElementById("currentTime").innerHTML = localDate + "<br/>" + localTime;
   //Calculate how many days left until July 4th

   var j4Date = new Date("July 4, 2020 21:00:00");
   var nextjDate = thisDay.getFullYear() + 1;
   j4Date.setFullYear(nextjDate);
   var daysLeft = (j4Date - thisDay)/(1000*60*60*24);

   //Calculate the hours left in the current day

   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   //Calculate the minutes and seconds left in the current day

   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

//Display the time left until 4th of July

   document.getElementById("dLeft").textContent= Math.floor(daysLeft);
   document.getElementById("hLeft").textContent= Math.floor(hrsLeft);
   document.getElementById("mLeft").textContent= Math.floor(minsLeft);
   document.getElementById("sLeft").textContent= Math.floor(secsLeft);

//Call the next july function
var j4Date = nextJuly4(thisDay);

}
   
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}