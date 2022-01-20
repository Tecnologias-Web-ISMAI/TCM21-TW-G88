/**
 * Scroll to top
 */

// Faz scroll para cima, quando o botão é clicado.
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Mostra o botão de voltar para cima, após fazer scroll de 1000px.
function toggleScrollTopVisibility() {
  if (window.scrollY > 1000) {
    document.querySelector('.scroll-to-top').classList.add('visible');
  } else {
    document.querySelector('.scroll-to-top').classList.remove('visible');
  }
}

// Quando o documento é carregado.
document.addEventListener('DOMContentLoaded', toggleScrollTopVisibility);

// Quando se faz scroll.
window.addEventListener('scroll', toggleScrollTopVisibility);






var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML =  img["src"] ="playPause.png" ;
  } else {
    video.pause();
    btn.innerHTML = img["src"] ="playPause.png";
  }
}



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










// When the user clicks on <div>, open the popup
 function myFunction2() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
 } 

 function myFunction3() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}









// Get the modal
var modal = document.getElementById("myModal");
      
// Get the button that opens the modal
var btn = document.getElementById("myBtn100");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/*
 * Install nodejs
 * > npm i
 * > node server.js
*/

var express = require("express"),
  fs = require("fs"),
  url = require("url");
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use("/", express.static(__dirname + "/"));
app.use(express.static(__dirname + "/"));

app.post("/formdata", function (request, respond) {
  var body = "";
  filePath = __dirname + "/formdata/emailList.txt";
  body =
    "NEW MESSAGE FROM " +
    request.body.user_name +
    ", " +
    request.body.user_mail +
    ", " +
    request.body.user_message +
    "\r\n";
  fs.appendFile(filePath, body, function () {
    respond.end(
      '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>Form Example</title><script type="text/javascript">alert("message added");window.location.replace("../");</script></head><body></body></html>'
    );
  });
});

// Running Server Details.
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at %s:%s Port", host, port);
});



