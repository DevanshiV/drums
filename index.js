var arr = document.querySelectorAll(".drum");
var l = arr.length;

document.querySelector(".w").addEventListener("click", function() {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
});
document.querySelector(".a").addEventListener("click", function() {
    var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
});
document.querySelector(".s").addEventListener("click", function() {
    var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
});
document.querySelector(".d").addEventListener("click", function() {
    var sound = new Audio("sounds/tom-4.mp3");
    sound.play();
});
document.querySelector(".j").addEventListener("click", function() {
    var sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
});
document.querySelector(".k").addEventListener("click", function() {
    var sound = new Audio("sounds/snare.mp3");
    sound.play();
});
document.querySelector(".l").addEventListener("click", function() {
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
});


document.addEventListener("keypress", function(event) {
    var e = event.key;
    console.log(e);
    switch (e) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'a':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 's':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case 'j':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case 'k':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'l':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        default:
            break;
    }
})