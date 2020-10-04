var showMobileNav = false;
var hamburgerNav = null;
var hamburgerButton = null;

// Dom loaded event, check to see if the page content (not media) has loaded
window.addEventListener("DOMContentLoaded", (event) => {
    initHamburgerEvents();
});

// Init the hamburger menu click events
var initHamburgerEvents = function() {
    hamburgerNav = document.getElementById("hamburger-menu");
    hamburgerButton = document.getElementById("hamburger-button");
    hamburgerButton.addEventListener("click", toggleMobileNav);
};

// Toggle the menu click event to add and remove the show / hide nav classes
var toggleMobileNav = function() {
    showMobileNav = !showMobileNav;
    
    if (showMobileNav) {
        hamburgerNav.classList.remove("hideNav");
        hamburgerNav.classList.add("showNav");
    }

    if (!showMobileNav) {
        hamburgerNav.classList.add("hideNav");
        hamburgerNav.classList.remove("showNav");
    }
};