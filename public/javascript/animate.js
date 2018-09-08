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
var opacity;

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


function playAnimation() //handles the loop 
{

  if(xPos <= -100 || xPos == null)
  {
    resetMovement();
    resetSize();
    resetOpacity();
  }
  else
  {
    handleMovement();
  }
}

function handleMovement() //handle movement of image div
{

  if(xPos >= turningPoint) //before image has hit 10% right of the screen
  {

    xPos--;
    yPos++;

    obj_inside.style.left = 40 * Math.sin( start ) + 'px'; //back and forth movement
    start += 0.05;


  }
  else //after image has hit 10% change movement and resize
  {
    xPos--;
    yPos = yPos + .5;
    handleSize();
    handleOpacity();
  }


  obj.style.right = xPos + 'px';
  obj.style.bottom = yPos + 'px';
}

function handleSize() //decrease size incrementally
{
  scale--;
  obj_inside.height = scale;
}

function handleOpacity()//lower image opacity per frame
{
  obj_inside.style.opacity = parseFloat(obj_inside.style.opacity) - 0.002;
}

function resetOpacity()
{
  obj_inside.style.opacity = "1";
}

function resetMovement() //reset image to original position
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
