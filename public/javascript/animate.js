//width of the document
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var turningPoint = width * (.1); //set the skater's turning point to a certain
                                 //percentage of the screen


var obj = document.getElementById("skater");

var xPos; //skate x coordinate
var yPos; //skater y coordinate

var scale = obj.height; //scale of skater
var orig_scale = obj.height; //save original scale of skater

//obj.style.position = "fixed"; //set positioning of skater

var loop = setInterval(playAnimation, 13);

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
  var frequency = 10;
  var magnitude = 0.5;

  if(xPos >= turningPoint)
  {

    xPos--;
    yPos++;
    //window.alert("xPos: " + xPos + " yPos: " + yPos);
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
  obj.height = scale;

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
  obj.height = orig_scale;
}
