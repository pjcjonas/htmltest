var accordionTogleIcons = null;

// Dom loaded event, check to see if the page content (not media) has loaded
window.addEventListener("DOMContentLoaded", () => {
    initAccordianEvents();
});

// Init the accordian events
var initAccordianEvents = function() {
    accordionTogleIcons = document.getElementsByClassName("faq-icon");
    for (const iterator of accordionTogleIcons) {
        iterator.addEventListener("click", (event) => {
            if (event?.target?.dataset?.id) {
                var selectedAnswer = event.target.dataset.id;
                document.getElementById(selectedAnswer).classList.toggle('hide-content');
                document.getElementById("toggle-" + selectedAnswer).classList.toggle('close-icon');
            }
        });
    }
};
