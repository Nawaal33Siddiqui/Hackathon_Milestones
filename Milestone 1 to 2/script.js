var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    // Use getComputedStyle to check the current display style
    if (window.getComputedStyle(skills).display === 'none') {
        skills.style.display = 'block'; // Show the skills section
    }
    else {
        skills.style.display = 'none'; // Hide the skills section
    }
});
