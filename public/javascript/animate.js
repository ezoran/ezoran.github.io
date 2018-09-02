//width of the document
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var turningPoint = width * (.1); //set the skater's turning point to a certain
                                 //percentage of the screen


var obj = document.getElementById("skater"); //skater container for base movement
var obj_inside = document.getElementById("skater_inside"); //actual skater image

var xPos; //skate x coordinate
var yPos; //skater y coordinate
var start = 0;

var scale = obj_inside.height; //scale of skater
var orig_scale = obj_inside.height; //save original scale of skater


var checkForMobile = window.matchMedia( "(max-width: 570px)" );

if(!checkForMobile.matches) //if screen size is larger than 570px, play the animation
{
  //obj.style.zIndex = "4"; //reset z-index for visibility
  obj_inside.style.display = "visible";

  var loop = setInterval(playAnimation, 13);
}
else //if on mobile
{
  obj_inside.style.display = "none";
}

function playAnimation()
{

  if(xPos <= -100 || xPos == null)
  {
    resetMovement();
    resetSize();
  }
  else
  {
    //loop animation
    handleMovement();
  //  handleSize();
  }
}

function handleMovement()
{

  if(xPos >= turningPoint)
  {

    xPos--;
    yPos++;

    obj_inside.style.left = 40 * Math.sin( start ) + 'px'; //back and forth movement
    start += 0.05;


  }
  else
  {
    xPos--;
    yPos = yPos + .5;
    handleSize();
  }


  obj.style.right = xPos + 'px';
  obj.style.bottom = yPos + 'px';
}

function handleSize()
{
  scale--;
  obj_inside.height = scale;

}

function resetMovement()
{

  xPos = (width / 2);
  yPos = -200;

  obj.style.right = xPos + 'px';
  obj.style.bottom = yPos + 'px';

}

function resetSize()
{
  scale = orig_scale;
  obj_inside.height = orig_scale;
}
