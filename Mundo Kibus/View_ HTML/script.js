window.onload = function () {
   var s = Snap(80000, 8000);
//lets draw 2 rects at position 100,100 and then reposition them
    // Cuadricula
    var matrix={};
    for (var i=0;i<15;i++){
        for (var j=0;j<15;j++)
         matrix [i,j]= s.rect(j*41, i*41, 40, 40, 0, 0);

    }
    var c = s.circle(20, 594, 10);
    c.attr('fill', 'red');     //This is the elements area to fill
console.log(matrix[0,1].getBBox())
}