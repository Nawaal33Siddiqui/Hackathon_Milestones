// Accessing the form element
var form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Retrieve form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('Linkedin').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var certifications = document.getElementById('certifications').value;
    // Generate resume content dynamically
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>LinkedIn:</b> ").concat(linkedin, "</p>\n\n        <h3>Education</h3>\n        <p><b>Education:</b> ").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p><b>Skills:</b> ").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p><b>Experience:</b> ").concat(experience, "</p>\n\n        <h3>Certifications</h3>\n        <p><b>Certifications:</b> ").concat(certifications, "</p>\n    ");
    // Display the generated resume in the 'resume-display' div
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = resumeHTML;
});
