

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
     var newx, newy;
    color = "black";
    width_of_line = 2;
var oldx,oldy;
   var newwidth=screen.width-75;
   var newheight=screen.height-300;
   if(screen.width<992){
       document.getElementById("myCanvas").width=newwidth;
       document.getElementById("myCanvas").height=newheight;

   }
   canvas.addEventListener("touchstart",mytouchstart);
   function mytouchstart(e){
       oldx=e.touches[0].clientX-canvas.offsetLeft;
       oldy=e.touches[0].clientY-canvas.offsetTop;
   }

   canvas.addEventListener("touchmove" ,mytouchmove);
   function mytouchmove(e){
       newx=e.touches[0].clientX-canvas.offsetLeft;
       newy=e.touches[0].clientY-canvas.offsetTop;
       
       ctx.beginPath();
       ctx.strokeStyle="purple"
       ctx.lineWidth=3;
       ctx.moveTo(oldx,oldy);
       ctx.lineTo(newx,newy);
       ctx.stroke();

       oldx=newx;
       oldy=newy;
       
   }