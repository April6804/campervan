// Nav hamburger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
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
// if(navigator.userAgent.match(/iPhone/)) {
//     $('html').addClass('iphone');
// }
