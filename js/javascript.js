var slideIndex = 1;
// var slides = document.getElementsByClassName("imggg");
// for (var i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imggg");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nextslide () {
  slideIndex++;
  showSlides(slideIndex);
}
// NUT SEARCH
function Nutsearch() {
  var x = document.getElementsByClassName("subsub");
  if (x[0].style.display == "none") {
    x[0].style.display = "block";
  } else {
    x[0].style.display = "none";
  }
}
//tab
function opentab(evt, tabname, tablinks, tabcontent) {
  var tabcontent = document.getElementsByClassName(tabcontent);
  var tablinks = document.getElementsByClassName(tablinks);
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";

  for(var i in tablinks) {
    tablinks[i].style.width = 100 / tablinks.length +'%';
  }

}

function themthongtinngsi() {
  var more = document.getElementById("hiddeninfo");
  var morex = document.getElementById("themthongtin");
  if (more.style.display == "none") {
    more.style.display = "block";
    morex.value = morex.value.replace("Xem thêm", "Ẩn bớt");
  } else {
    more.style.display = "none";
    morex.value = morex.value.replace("Ẩn bớt", "Xem thêm")
  }
}

// Phâtlbum

var tenbh = document.getElementsByClassName("albumdanhsach0");
var tencs = document.getElementsByClassName("albumcasi");
function Playnhac(i) {
  // nhac.src = nhacs[i];
  // nhac.play();
  document.getElementById("tenbaihat").innerHTML = tenbh[i].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[i].innerHTML;
  document.getElementById("audioaudio").src = nhacs[i];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = i + 1;
}

function prev() {
  var stt = document.getElementById("stt").innerHTML;
  document.getElementById("tenbaihat").innerHTML = tenbh[stt - 2].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[stt - 2].innerHTML;
  document.getElementById("audioaudio").src = nhacs[stt - 2];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = stt - 1;
}

function next() {
  var stt = document.getElementById("stt").innerHTML;
  document.getElementById("tenbaihat").innerHTML = tenbh[stt].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[stt].innerHTML;
  document.getElementById("audioaudio").src = nhacs[stt];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = parseInt(stt) + 1;
}
$(document).ready(function () {
  var defaultOpen = document.getElementsByClassName("defaultOpen");
			for (var i in defaultOpen) {
				defaultOpen[i].click();
      }
});

