var sonnet = document.getElementById("sonnet").innerHTML;

var startingPosition = sonnet.indexOf("orphans");
console.log("Starting position of orphans": sonnet.length);



var newSonnet = sonnet.replace("winter", "yuletide");
var finalSonnet = newSonnet.replace(/ the /gi, " a large ");
document.getElementById("sonnet").innerHTML = finalSonnet;