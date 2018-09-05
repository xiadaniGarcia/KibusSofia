window.onload = function () {
   var s = Snap(800, 600);

//lets draw 2 rects at position 100,100 and then reposition them
    // Cuadricula
    var matrix={};
    for (var i=0;i<15;i++){
        for (var j=0;j<15;j++)

         matrix [i,j]= s.rect(j*39, i*39, 38, 38, 0, 0).attr('fill','green');


    }

    var pos = matrix[0,13].getBBox();
    console.log(pos);
    x=39*2;
    y=39*3;
    var c = s.image("img/arbol2.png",x, y, 38, 38);




//sconsole.log(matrix[0,1].getBBox())
}
