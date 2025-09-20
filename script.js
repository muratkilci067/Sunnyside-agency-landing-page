const hamburgerNav = document.querySelector(".hamburger-nav");
const hamburgerBtn = document.querySelector(".hamburger")

hamburgerBtn.addEventListener("click", ()=>{
    hamburgerNav.classList.toggle("none");
})