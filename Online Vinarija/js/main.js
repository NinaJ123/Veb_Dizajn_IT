/* Lightbox */ 

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

// Close Modal => ESC
window.onkeydown = function (event){
  if ( event.keyCode == 27 ){
      document.getElementById("myModal").style.display = "none";
  }
} 


// Porudzbina
function kreiraj(){

  let vrstaVina = document.getElementById('vrsta').value;
  let ambalaza = document.getElementById('ambalaza').value;
  let kolicina = document.getElementById('kolicina').value;

  let racun = vrstaVina * ambalaza * kolicina;

  document.getElementById('racun').innerHTML = `Račun: ${racun} RSD`;
  
}