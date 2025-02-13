document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let skills = document.getElementById("skills").value.trim();
    let resume = document.getElementById("resume").files[0];

    if (name === "" || email === "" || phone === "" || skills === "" || !resume) {
        alert("All fields are required!");
        return;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address!");
        return;
    }

    // Phone validation (10-digit number)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;
    }

    // File type validation
    let allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    if (!allowedExtensions.test(resume.name)) {
        alert("Only PDF, DOC, and DOCX files are allowed!");
        return;
    }

    document.getElementById("successMessage").innerText = "Registration successful!";
    document.getElementById("registrationForm").reset();
});