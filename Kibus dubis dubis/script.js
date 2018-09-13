var s ;
var matrix={};
window.onload = function () {
   s = Snap(600, 600);
//lets draw 2 rects at position 100,100 and then reposition them
    // Cuadricula

$("#rollover" )
  .change(function () {
  //  inicialize(s);
  var por=$( "#rollover" ).val();
    console.log(por);
    s.clear();
    DrawSnap();
//    createMap(por);
  })
  .change();
}
function DrawSnap(){
  for (var i=0;i<15;i++){
      for (var j=0;j<15;j++)
       matrix [i,j]= s.rect(j*39, i*39, 38, 38, 0, 0);

  }

  var c = s.circle(20, 594, 10);
  c.attr('fill', 'red');     //This is the elements area to fill
}
function createMap(porcentage){
  //Calcula los cuadros que tendrán obstaculo.
  var amount = parseInt((225*porcentage)/100);

  //Genera obstaculos aleatorios
  for(var i = 0; i < amount; i++){
    var x = parseInt(Math.random()*15);
    var y = parseInt(Math.random()*15);
var  matrixO=[];
 matrixO[x,y] = 1;
    x = x*39;
    y = y*39;
    var c = s.image("imagenesChidas/amigo.png",x, y, 38, 38);

  }
}
function Clickeable(){



  //Uses plugin at http://svg.dabbles.info/animate-object-path.js

  var path = s.path("M 60 0 L 120 0 L 180 60 L 180 120 L 120 180 L 60 180 L 0 120 L 0 60 Z").attr({ fill: "none", stroke: "red", opacity: "1" });
  var rect = s.rect(60,0,20,20).attr({ fill: 'blue', opacity: 0 });
  var rect2 = rect.clone();
var cont=0;
  function drawRect( v ) {
    cont++;
    console.log("Holi con una x"+cont);
    matrix[0,1].attr('fill','red');
  	matrix[0,1].attr({y: 0 ,x:cont*100})
  };

  for( var x = 0; x < 7; x++ ) {
  	setTimeout( function() { drawRect( x ) }, x*1000);
  };
//matrix[0,1].attr({y: 0 ,x:0})
//matrix[0,1].attr({y: 100 ,x:0})

}



function wait(ms)
{
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
}
