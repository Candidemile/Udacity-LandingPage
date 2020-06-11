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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavBar = function() {
    const fragment = document.createDocumentFragment();
    const sections = document.querySelectorAll("section");
    const navBar = document.getElementById("navbar__list");

    for (section of sections) {
        const newElement = document.createElement('li');
        newElement.classList.add("menu__link");
        // newElement.innerText = section.id;

        const link = document.createElement('a');
        link.innerText = section.dataset.nav;
        link.href = `#${section.id}`;
        newElement.appendChild(link);
        

        fragment.appendChild(newElement)
        console.log(fragment);
    }

    navBar.appendChild(fragment);
}

buildNavBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


