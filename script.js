/* ================= TYPING ANIMATION ================= */

var typed = new Typed("#typing", {

    strings: [
        "Machine Learning Enthusiast",
        "Data Analytics Enthusiast",
        "Python Developer",
        "AI & Data Analytics Student"
    ],

    typeSpeed: 65,
    backSpeed: 35,
    backDelay: 1800,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|"

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === "#" + current){
            link.classList.add("active");
        }

    });

});


/* ================= SCROLL TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "flex";
        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* ================= DYNAMIC YEAR ================= */

document.getElementById("year").textContent =
new Date().getFullYear();


/* ================= MOBILE MENU ================= */

function toggleMenu(){

    const navLinks =
        document.querySelector(".nav-links");

    const menuIcon =
        document.querySelector(".menu-toggle i");

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }
    else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(){

        document
            .querySelector(".nav-links")
            .classList.remove("active");

        const menuIcon =
            document.querySelector(".menu-toggle i");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});


/* ================= AOS ANIMATION ================= */

AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
});