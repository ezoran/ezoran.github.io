var modal1 = document.getElementById('modal1');
var modalBtn1 = document.getElementById('modalBtn1');
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];

var modal2 = document.getElementById('modal2');
var modalBtn2 = document.getElementById('modalBtn2');
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

var modal3 = document.getElementById('modal3');
var modalBtn3 = document.getElementById('modalBtn3');
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

var modal4 = document.getElementById('modal4');
var modalBtn4 = document.getElementById('modalBtn4');
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];


modalBtn1.addEventListener('click', openModal);
closeBtn1.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

modalBtn2.addEventListener('click', openModal);
closeBtn2.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

modalBtn3.addEventListener('click', openModal);
closeBtn3.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside)


modalBtn4.addEventListener('click', openModal);
closeBtn4.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside)


function openModal(e)
{
	console.log("hit");

	if (e.target == modalBtn1)
	{
		console.log("1 on");
		modal1.style.display = 'block';

	}
	else if (e.target == modalBtn2)
	{
		console.log("2 on");
		modal2.style.display = 'block';

	}
	else if (e.target == modalBtn3)
	{
		console.log("3 on");
		modal3.style.display = 'block';

	}
	else if (e.target == modalBtn4)
	{
		console.log("4 on");
		modal4.style.display = 'block';

	}
}

function closeModal(e)
{
	if(e.target == closeBtn1)
	{
		console.log("1 off x");
		modal1.style.display = 'none';
	}
	else if(e.target == closeBtn2)
	{
		console.log("2 off x");
		modal2.style.display = 'none';
	}
	else if(e.target == closeBtn3)
	{
		console.log("3 off x");
		modal3.style.display = 'none';
	}
	else if(e.target == closeBtn4)
	{
		console.log("4 off x");
		modal4.style.display = 'none';
	}
}

function clickOutside(e)
{
	if(e.target == modal1)
	{
		console.log("1 off modal");

		modal1.style.display = 'none';
	}
	if(e.target == modal2)
	{
		console.log("2 off modal");

		modal2.style.display = 'none';
	}
	if(e.target == modal3)
	{
		console.log("3 off modal");

		modal3.style.display = 'none';
	}
	if(e.target == modal4)
	{
		console.log("4 off modal");

		modal4.style.display = 'none';
	}
}