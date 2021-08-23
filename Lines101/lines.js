var canvas = document.getElementById("canvas")
var pen = canvas.getContext("2d")
var WIDTH = (canvas.width-1)/2
var HEIGHT = (canvas.height - 1)/2
var x = null
var y = null
var magnification = 3
var offX = WIDTH
var offY = HEIGHT
var figs = 10
var pts = 1000
var drawit = true
console.log(WIDTH+" "+HEIGHT);
init()


function grid(){

  pen.fillStyle = 'black'
  pen.beginPath()
  pen.fillRect(WIDTH,0,1,HEIGHT*2)
  pen.fillRect(0,HEIGHT,2*WIDTH,1)
  pen.stroke()

}


function init(){
  grid()
  for(var j = 0; j < figs; j++){
    var slope = Math.random() * 10 * Math.pow(-1,Math.floor(Math.random()*2))
    var c = Math.random() * 500 *  Math.pow(-1,j)
    var style = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';
    for(var i = -500; i < pts; i ++){
      setup(i,fishit(i,slope,c))
      draw(style);
    }
  }
}

function setup(xo,yo){
  x = xo + offX
  y = offY - yo
}

function draw(style){
  pen.fillStyle = style
  pen.fillRect(x,y,2,2)
}


function fishit(inx,slope,c){
  var fy = slope*inx + c
  console.log("y = "+slope+"x"+"+ ("+c+")");
  return fy
}
