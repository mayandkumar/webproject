var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//add function to showMore btn


if (window.matchMedia("(max-width: 780px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-left", "0px");

	for(var i = 3; i < 5; i++) {

		if(document.querySelector(".proj-" + i).style.display === "none") {

			document.querySelector(".proj-" + i).style.display = "block";

			//document.querySelector(".proj-2").style.marginRight = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".proj-" + i).style.display = "none";
//			document.querySelector(".proj-2").style.marginRight = "90px";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} 
else {

		$(".show-link").click(function() {


	for(var i = 3; i < 5; i++) {

		if(document.querySelector(".proj-" + i).style.display === "none") {

			document.querySelector(".proj-" + i).style.display = "block";

			//document.querySelector(".proj-2").style.marginLeft = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} 
		else {

			document.querySelector(".proj-" + i).style.display = "none";

						document.querySelector(".proj-2").style.marginLeft = "60px";

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}

// add function to mobile nav icons

document.querySelector('.nav-icon').addEventListener('click', function()  {

	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';

});

document.querySelector('.close').addEventListener('click', function() {

	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';


});