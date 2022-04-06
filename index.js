// document.querySelector("button").addEventListener("click", handleClick); //query selector only selects the first buttion in the index.html, so this is only applied to the w drum button
// for(var i=0; i<document.querySelectorAll(".drum").length; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//       alert("I got clicked");
//   });
// }
// var i=0;
// document.querySelectorAll("button").forEach(i) {
//     addEventListener("click", function () {
//         alert("I got clicked");
//     })
//     i++;
// });

// //Constructor function: name should be in camel case and should start with capital letter
// function BellBoy(experience, name, cleaning){
//   this.experience = experience;
//   this.name = name;
//   this.cleaning = cleaning;
// this.clean = function (){
//   alert("cleaning in progress...");
// }
// }
//button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color="white";
    var button = this.innerHTML;
    makesound(button);
    buttonanimation(button);
  });
}
// detecting keyboard press
document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonanimation(event.key);
});
//to play sound
function makesound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
    }
}

function buttonanimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
