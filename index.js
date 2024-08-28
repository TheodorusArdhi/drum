var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4= new Audio('sounds/tom-4.mp3');

var length = document.querySelectorAll(".drum").length;
for (i=0; i<length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        sound(this.innerHTML);
        animation(this.innerHTML);
    })
}

document.addEventListener("keydown", function (e) {
    sound(e.key);
    animation(e.key);
});

function sound(key) {
    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom3.play();
        break;

        case "s":
            tom3.play();
        break;

        case "d":
            tom4.play();
        break;

        case "j":
            snare.play();
        break;

        case "k":
            crash.play();
        break;

        case "l":
            kick.play();
        break;

        default:

        break;
    }
}

function animation(i) {
    var button = document.querySelector("." + i);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}


