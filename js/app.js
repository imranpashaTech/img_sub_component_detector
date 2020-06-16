var like = document.getElementById("like");
var dis_like = document.getElementById("dis_like");
var moving = false;

like.addEventListener("mousedown", initialClick, false);
dis_like.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 20;
  var newY = e.clientY - 20;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {
    
  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}