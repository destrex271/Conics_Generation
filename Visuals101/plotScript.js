var canvas = document.getElementById("canvas")
var pen = canvas.getContext('2d')
var WIDTH = canvas.width - 100;
var HEIGHT = canvas.scrollHeight - 100;
var offX = WIDTH;
var offY = HEIGHT;
var x = null
var y = null

var pts =1000
var nums = 10
//console.log(WIDTH + " " + HEIGHT)
grid()

function draw(){

  console.log(x +" "+ y)
  pen.fillStyle="green"
  pen.fillRect(x,y,2,2)
  pen.fill()
}

function setup(xo,yo){
  x = yo
  y = offY - xo
}

function grid(){
  pen.beginPath();
  pen.fillRect(0,0,1,HEIGHT+100)
  pen.fillRect(0,HEIGHT-1,WIDTH,1)
  pen.fill();
}

function init(){
  for(var j = 0; j < nums ; j++){
    a = Math.random();
    for(var i = -400; i < pts; i++){
      setup(i,fishit(i,a));
      draw();
    }
    //setTimeout(function(){pen.clearRect(0,0,WIDTH,HEIGHT);grid()},1000)
  }

}

function fishit(inx,a){
  var finy = a*0.01*Math.pow(inx,2)   // parabola
  //var finy = a*10*inx - a*1000 // line
  console.log(inx+" " +finy)
  return finy;
}
