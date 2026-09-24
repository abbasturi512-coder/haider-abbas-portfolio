// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// 1. Mobile Menu
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


// 2. Close mobile menu when clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// 3. Dark / Light Mode
const themeButton = document.querySelector(".theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeButton.textContent = "☀";
        } else {
            themeButton.textContent = "☾";
        }

    });

}


// 4. Typing Effect
const typingText = document.querySelector(".typing");

const words = [
    "Web Developer",

   
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// 5. Scroll Animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {
    observer.observe(section);
});


// 6. Current Year in Footer
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}