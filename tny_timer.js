"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author:leeman 
   Date:1/24/23   

*/
function showClock() {


var thisDay = new Date();
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();

document.getElementById("currentTime").innerHTML = localeDate + "<br/>" + localTime;

var j4Date = new Date("July 4, 2020 21:00:00");
var

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

