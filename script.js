var typed = new Typed("#typing", {

    strings: [

        "Machine Learning Enthusiast",

        "Data Analytics Student",

        "Full Stack Developer",

        "Python Programmer"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1500,

    loop:true

});
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
document.getElementById("year").textContent =
new Date().getFullYear();
function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});