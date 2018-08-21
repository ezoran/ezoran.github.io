var obj = document.getElementById("skater");

var xPos; //skate x coordinate
var yPos; //skater y coordinate

var scale = obj.height; //scale of skater

obj.style.position = "fixed"; //set positioning of skater

var loop = setInterval(playAnimation, 10);

function playAnimation()
{

  if(xPos <= 0 || xPos == null)
  {
    resetAnimation();
  }
  else
  {
    //loop animation\
    handleMovement();
    handleSize();
  }
}

function handleMovement()
{
  xPos--;
  yPos++;

  obj.style.left = xPos + 'px';
  obj.style.bottom = yPos + 'px';
}

function handleSize()
{
  scale--;
  obj.height = scale;
}

function resetAnimation()
{
  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  xPos = (width / 2);
  yPos = -200;

  obj.style.left = xPos + 'px';
  obj.style.bottom = yPos + 'px';

}
