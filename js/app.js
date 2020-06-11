/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const scrollToElement = function(target) {
    document.querySelector(target.hash).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavBar = function() {
    const fragment = document.createDocumentFragment();

    for (section of sections) {
        const newElement = document.createElement('li');
        newElement.classList.add("menu__link");
        // newElement.innerText = section.id;

        const link = document.createElement('a');
        link.innerText = section.dataset.nav;
        link.href = `#${section.id}`;
        newElement.appendChild(link);
        
        fragment.appendChild(newElement)
    }

    navBar.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (
            section.offsetTop <= fromTop + 200 &&
            section.offsetTop + section.offsetHeight - 200 > fromTop
        ) {
            section.classList.add("your-active-class");
            link.parentElement.classList.add("link_active");
        } else {
            section.classList.remove("your-active-class");
            link.parentElement.classList.remove("link_active");
        }
    });
  });

// Scroll to anchor ID using scrollTO event
navBar.addEventListener("click", function(e) {
    event.preventDefault();

    if (e.target.nodeName == "A") {
        scrollToElement(e.target);
    }

    if (e.target.nodeName == "LI") {
        scrollToElement(e.target.children[0])
    }
    
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();

// Scroll to section on link click

// Set sections as active


