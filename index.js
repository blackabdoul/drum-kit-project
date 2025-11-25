// "click" (Mouse) Event Listener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var letter = this.innerHTML;

    // this anonym func calling both makeSound func and buttonAnimation func
    makeSound(letter);

    buttonAnimation(letter);
  });
}

// "keypress" (keypad) Event Listener
document.addEventListener("keypress", function (eve) {
  var valueOfKeyOfTheEve = eve.key;

  // this anonym func calling both makeSound func and buttonAnimation func
  makeSound(valueOfKeyOfTheEve);

  buttonAnimation(valueOfKeyOfTheEve);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(this.innerHTML);
  }
}

// Now for the Animation (Which is not in my version above)-----------------------------------

function buttonAnimation(key) {
  var currentButton = document.querySelector("." + key);

  //add the "pressed" class to the particuler button to achieve animation
  currentButton.classList.add("pressed");

  //removing the same "pressed" class after 100 milliseconds
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}
