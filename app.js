// For lightbox on Gallery page--------------------------------
$(".flexbox img").click(openModal);
$(".close").click(closeModal);

// Darken the page
function openModal() {
document.getElementById('myModal').style.display = "block";
}

// Remove the darkness
function closeModal() {
document.getElementById('myModal').style.display = "none";
}


function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

//Loop through slides, hide them, display one at a time
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


//For upload button on Contact package -------------------------------
//On click alow user to select file
function getFile(){
  document.getElementById("upfile").click();
}
//Grab file name and change button text
function sub(obj){
   var file = obj.value;
   var fileName = file.split("\\");
   document.getElementById("btn").innerHTML = fileName[fileName.length-1];
 }

// For iphone: add a class on the html to target width of buttons on contact page.
if(navigator.userAgent.match(/iPhone/)) {
    $('html').addClass('iphone');
}
