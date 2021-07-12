

for(var  i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",listen);

}


function listen(){


  var sound=this.innerHTML;
  makeSound(sound);
  buttonAnimation(sound);
}
document.addEventListener("keydown",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){

  switch (key) {
    case "d":

    var audio=new Audio('sounds/tom-1.mp3')
    audio.play();




    break;
    case "j":

    var audio1=new Audio('sounds/tom-2.mp3')
    audio1.play();




    break;
    case "k":

    var audio2=new Audio('sounds/tom-3.mp3')
    audio2.play();




    break;
    case "l":

    var audio3=new Audio('sounds/tom-4.mp3')
    audio3.play();




    break;
    case "w":

    var audio4=new Audio('sounds/crash.mp3')
    audio4.play();




    break;
    case "a":

    var audio5=new Audio('sounds/kick-bass.mp3')
    audio5.play();




    break;
    case "s":

    var audio6=new Audio('sounds/snare.mp3')
    audio6.play();




    break;
  default:

}



}
function buttonAnimation(currentkey){
  var animation=document.querySelector("."+ currentkey);
  animation.classList.add("pressed");
  setTimeout(function(){
  animation.classList.remove("pressed");
},100);
}
