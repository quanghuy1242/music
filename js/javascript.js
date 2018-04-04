var slideIndex = 1;
var slides = document.getElementsByClassName("imggg");
for (var i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imggg");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// NUT SEARCH
function Nutsearch() {
  var x = document.getElementsByClassName("subs");
  if (x[0].style.display == "none") {
    x[0].style.display = "block";
  } else{
    x[0].style.display = "none";
  } 
}
//tab
function opentab(evt, tabname) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

