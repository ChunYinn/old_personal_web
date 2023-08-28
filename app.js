const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  //add active class
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(element => element.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

//---------------------------
var alert_dash = document.getElementById("alert_dashboard");
alert_dash.addEventListener("click", function() {
  alert("Cannot be showcased publicly (For enterprise)");
});

var alert_dash = document.getElementById("alert_view_all");
alert_dash.addEventListener("click", function() {
  event.preventDefault();
  alert("More project will be adding in the following days");
});
//------ dashboard
const images = [
  "img/dashboard1.png",
  "img/dashboard2.png",
  "img/dashboard3.png"
]; 

let index = 0; // initialize the index variable

function changeImage() {
  const image = document.querySelector(".project-image");
  image.src = images[index];
  index = (index + 1) % images.length; // increment the index and loop back to 0 when it reaches the end
}

setInterval(changeImage, 3000);


//----------
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 3 seconds
}

//---------
