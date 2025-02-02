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
    var cvnameElemnt = document.getElementById("cvname");
    if (picInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvnameElemnt) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var cvname = cvnameElemnt.value;
        var uniquePath = "resumes/".concat(cvname.replace(/\s+/g, '_'), "_cv.html");
        var picFile = (_a = picInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var picUrl = picFile ? URL.createObjectURL(picFile) : "";
        var resumeOutput = "\n<h2>Resume</h2>\n<div style=\"text-align: center;\">\n    ".concat(picUrl ? "<img src=\"".concat(picUrl, "\" alt=\"Profile Picture\" class=\"pic\">") : "", "\n</div>\n<p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n<p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n<p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span> </p>\n\n<h2>Education</h2>\n<p id=\"edit-education\" class=\"editable\">").concat(education, " </p>\n<h3 >Experience</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, " </p>\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, " </p>\n");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your CV';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('One or more form elements are missing');
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
