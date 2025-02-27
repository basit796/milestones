document.getElementById("resumeForm")?.addEventListener('submit',function(event) {
    event?.preventDefault();

const picInput = document.getElementById('pic') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

const cvnameElemnt= document.getElementById("cvname") as HTMLInputElement;




if( picInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && cvnameElemnt){

    const name =nameElement.value ;
    const email =emailElement.value;
    const phone =phoneElement.value;
    const education =educationElement.value;
    const experience =experienceElement.value;
    const skills =skillsElement.value;

    const cvname = cvnameElemnt.value;
    const uniquePath = `resumes/${cvname.replace(/\s+/g,'_')}_cv.html`

    const picFile = picInput.files?.[0]
    const picUrl = picFile ? URL.createObjectURL(picFile):"";



const resumeOutput = `
<h2>Resume</h2>
<div style="text-align: center;">
    ${picUrl ? `<img src="${picUrl}" alt="Profile Picture" class="pic">` : ""}
</div>
<p><strong>Name:</strong><span id="edit-name" class="editable"> ${name} </span> </p>
<p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
<p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone}</span> </p>

<h2>Education</h2>
<p id="edit-education" class="editable">${education} </p>
<h3 >Experience</h3>
<p id="edit-experience" class="editable">${experience} </p>
<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills} </p>
`;


const downloadLink = document.createElement('a')
downloadLink.href='data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput);
downloadLink.download = uniquePath;
downloadLink.textContent ='Download Your CV'

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput

    resumeOutputElement.appendChild(downloadLink)
}
else{
    console.error('One or more form elements are missing')
}
}
})


function makeEditable(){
    const editableElements =document.querySelectorAll('editable');
    editableElements.forEach(element =>{
        element.addEventListener('click', function(){
            const currentElement =element as HTMLElement;
            const currentValue = currentElement.textContent ||"";

            if(currentElement.tagName ==="P" || currentElement.tagName==='SPAN'){
                const input = document.createElement('input')
                input.type ='text'
                input.value = currentValue
                input.classList.add('editing-input')

                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()

            }

        })
    })
}