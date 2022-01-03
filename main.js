x = 0;
y = 0;

var screen_width = 0;

var screen_height = 0;
to_number = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if (Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML= "Started drawing apple";
  draw_apple = "set";

    } else {
      document.getElementById("status").innerHTML= "the speech has not recognized a number";
    }
    
  
}
function preload() {
  appleman= loadImage('apple.png') 
}

function setup() {

screen_width = window.innerWidth;
screen_height = windows.innerHeight;
canvas= createCanvas(screen_width, screen_height-150);
canvas.position(0,150)
}

function draw() {

  if (draw_apple == "set") {
    for (var river = 1 ; river<=to_number; river++) {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(appleman,x,y,80,80);
     }
     document.getElementById("status").innerHTML = to_number+'APPLES DRAWN';
     speak_data = to_number+"APPLES DRAWN";
     speak()
  }

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

