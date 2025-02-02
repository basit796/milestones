var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var picInput = document.getElementById('pic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (picInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var picFile = (_a = picInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var picUrl = picFile ? URL.createObjectURL(picFile) : "";
        var resumeOutput = "\n<h2>Resume</h2>\n".concat(picUrl ? "<img src=".concat(picUrl, " alt=\"Profile pucture\" class\"pic\">") : "", "\n<p><strong>Name:</strong>").concat(name_1, " </p>\n<p><strong>Email:</strong>").concat(email, " </p>\n<p><strong>Phone Number:</strong>").concat(phone, "} </p>\n\n<h2>Education</h2>\n<p>").concat(education, " </p>\n<h3>Experience</h3>\n<p>").concat(experience, " </p>\n<h3>Skills</h3>\n<p>").concat(skills, " </p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output data is missing');
        }
    }
});
