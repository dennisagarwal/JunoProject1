//declaring audio file with a constant
const angryCatRoar = new Audio("catsounds/angryCatRoar.mp3");
const catAttentionMeow = new Audio("catsounds/catAttentionMeow.mp3");
const catPainMeow = new Audio("catsounds/catPainMeow.mp3");
const catSlowMoan = new Audio("catsounds/catSlowMoan.mp3");
const hungryCatMeow = new Audio("catsounds/hungryCatMeow.mp3");
const littleCatMeow = new Audio("catsounds/littleCatMeow.mp3");
const wildCatRoar = new Audio("catsounds/wildCatRoar.mp3");
const lionAngryRoar = new Audio("catsounds/lionAngryRoar.mp3");


//use of jQuery and click browser event
 $(".w").on("click", function() {
   angryCatRoar.play();
 });


 $(".a").on("click", function() {
   catAttentionMeow.play();
 });

 $(".s").on("click", function() {
   catPainMeow.play();
 });

 $(".d").on("click", function() {
   catSlowMoan.play();
 });

 $(".j").on("click", function() {
   hungryCatMeow.play();
 });

 $(".k").on("click", function() {
   lionAngryRoar.play();
 });

 $(".l").on("click", function() {
   littleCatMeow.play();
 });

 $(".m").on("click", function() {
   wildCatRoar.play();
 });


//use of jQuery and keydown browser event
//e refers to event, it is a parameter.
//it lets us tap into the event that trigger the event listener
 $("body").on('keydown', function(event) {

 if (event.keyCode == 87) {
  angryCatRoar.play();
 }
 else if(event.keyCode == 65) {
    catAttentionMeow.play();
 }
 else if(event.keyCode == 83) {
   catPainMeow.play();
 }
 else if(event.keyCode == 68) {
  catSlowMoan.play();
 }
 else if(event.keyCode == 74) {
    hungryCatMeow.play();
 }
 else if(event.keyCode == 75) {
   lionAngryRoar.play();
 }
 else if(event.keyCode == 76) {
  littleCatMeow.play();
 }
 else if(event.keyCode == 77) {
   wildCatRoar.play();
 }
});
