function openM(){
  document.getElementById("container").style.display = "block";
}
function closeM(){
  document.getElementById("container").style.display = "none";
}

var slideIndex = 1;
showSlide(slideIndex);

function minD(n){
  showSlide(slideIndex += n)
}
function cSlide(n){
  showSlide(slideIndex = n)
}

function showSlide(n){
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
