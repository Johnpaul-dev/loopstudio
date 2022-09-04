const hamburgerOpen = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("icon-close");
const mobileNav = document.getElementById("mobile-nav");
const body = document.getElementById("active");
const link = document.querySelectorAll("#nav-menu");

hamburgerOpen.addEventListener("click", () =>{
    mobileNav.style.display = "flex";
    body.style.position = "fixed";
    
});

hamburgerClose.addEventListener("click", () =>{
    mobileNav.style.display = "none";
    body.style.position = "relative";
});

link.forEach(n => n.addEventListener("click", () => {
    mobileNav.style.display = "none";
    body.style.position = "relative";
}))