document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // After scrolling 100px
            navbar.classList.add("scrolled"); // Add black background
        } else {
            navbar.classList.remove("scrolled"); // Keep transparent
        }
    });
});

var typed = new Typed('#element', {
    strings: ['Designer', 'Developer','Freelancer','Photographer'],
    typeSpeed: 50,
    loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");
    const header = document.querySelector("header"); // Ensure header exists

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTop.style.display = "block"; // Show button
        } else {
            backToTop.style.display = "none"; // Hide button
        }
    });

    // Smooth scroll to top
    backToTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
