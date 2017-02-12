WebFont.load({
    google: {
      families: [ 'Quicksand', 'Poppins', 'Droid Sans', 'Merriweather']
    }
  });




var sketchProc1 = function(processingInstance) {
     with (processingInstance) {
      
          size(window.innerWidth*0.98, window.innerWidth/12); 
      
     /*frameRate(60);*/
        background(255, 255, 255);
       noStroke();
       var x1=width/210;
       var triangleh= 2*width/90;
       var a =4*x1;
       var w = 2*window.innerWidth/(triangleh+a);
      var w1=w/13;
       
       for (var i=0; i<w+2; i++) {
         for (var j=0; j<w1; j++) {
           
         var b=random(1, 9);
       var c=floor(b);
           if (c==1) {
             fill(108, 198, 229);
           }
           if (c==3) {
           fill(84, 154, 178);
           }
            if (c==2) {
            fill(87, 242, 255);
            }
            if (c==1) {
           fill(37, 79, 194);
           }
           if (c==5) {
           fill(97, 121, 204);
           }
           if (c==6) {
           fill(255, 255, 255);
           }
           if (c==8) {
           fill(166, 240, 255);
           }
          if (c==4) {
           fill(37, 79, 194);
           }
           if (c==7) {
           fill(255, 255, 255);
           }
         triangle(x1+a*i, x1+a*j, triangleh+a*i, x1+a*j, x1+a*i, triangleh+a*j);
           if (c==2) {
           /*fill(255, 0, 0);*/
           fill(37, 79, 194);
           }
           if (c==1) {
           /*fill(238, 255, 0); */
           fill(97, 121, 204);
           }
           if (c==3) {
           /*fill(138, 255, 0); */
           /*fill(166, 240, 255);*/
            fill(255, 255, 255);  
           }
            if (c==4) {
           /*fill(238, 255, 0); */
           fill(84, 154, 178);
           }
            if (c==7) {
           /*fill(138, 255, 0); */
            fill(87, 242, 255);
            }
            if (c==8) {
           /*fill(255, 0, 0);*/
           fill(37, 79, 194);
           }
            if (c==5) {
           fill(255, 255, 255);
           }
            if (c==6) {
           /*fill(138, 255, 0); */
           fill(186, 230, 255);
           }
     triangle(triangleh+a*i, triangleh+a*j, triangleh+a*i, x1+a*j, x1+a*i, triangleh+a*j);
       }
       }
  
      
     }    
 };


 var canvas = document.getElementById("mycanvas"); 
    
    var processingInstance = new Processing(canvas, sketchProc1); 

 function resize() {
          var processingInstance1 = new Processing(canvas, sketchProc1); 
       }
       window.onresize=resize;
