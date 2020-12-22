
//----------------------Header--------------------------// 

const menu = document.querySelector(".l_menu__list");
const menuBtn = document.querySelector(".menu__btn");
const cancelBtn = document.querySelector(".cancel__btn");
const l_navbar = document.querySelector(".l_navbar");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
    this.scrollY > 20 ? l_navbar.classList.add("sticky") : l_navbar.classList.remove("sticky");
}

//------------------------Slider-------------------------//

var slideIndex = 1;
showSlides(slideIndex);
        
function plusSlides(n) {
    showSlides(slideIndex += n);
}
        
function currentSlide(n) {
    showSlides(slideIndex = n);
}
        
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("c_dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" move", "");
}
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " move";
}
var slideIndex = 0;
showSlider();

function showSlider() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("c_dot");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" move", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " move"; 
setTimeout(showSlider, 3000); // Change image every 2 seconds
}