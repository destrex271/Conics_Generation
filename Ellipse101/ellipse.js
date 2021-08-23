var canvas = document.getElementById("canvas")
var pen = canvas.getContext('2d')

var WIDTH = (canvas.width - 1)/2
var HEIGHT = (canvas.height - 1)/2

var offX = WIDTH
var offY = HEIGHT

var x , y = null
var figs = 5
var pts = 5000


init()

function grid(){
  pen.beginPath();
  pen.fillRect(WIDTH,0,1,HEIGHT*2)
  pen.fillRect(0,HEIGHT,WIDTH*2,1)
  pen.stroke()
}

function draw(style){
  pen.fillStyle = style
  pen.fillRect(x,y,2,2)
}

function init(){
  grid()
  for(var j = 1; j <= figs; j++){
    var a = Math.floor(Math.random() * 400)
    var b = Math.floor(Math.random() * 400)
    var colorStyle = 'rgb('+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+','+
      Math.floor(Math.random()*256)+')';
    console.log("Eccentricity is:" + (a>b?Math.sqrt(1-((b*b)/(a*a))):Math.sqrt(1-((a*a)/(b*b)))));
    for(var i = -500; i <= pts; i++){
      setup(i,fishit(i,a,b))
      draw(colorStyle)
      setup(i,-fishit(i,a,b))
      draw(colorStyle)
    }
  }
}

function setup(xo,yo){
  x = offX + xo
  y = offY - yo
}

function fishit(inx,a,b){
  var exp = (b*b) * (1 - ((inx*inx)/(a*a)))
  var finy = Math.sqrt(exp)
  return finy
}
