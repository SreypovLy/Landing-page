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
