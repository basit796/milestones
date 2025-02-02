document.getElementById("resumeForm")?.addEventListener('submit',function(event) {
    event?.preventDefault();

const picInput = document.getElementById('pic') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

if( picInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ){
    const name =nameElement.value ;
    const email =emailElement.value;
    const phone =phoneElement.value;
    const education =educationElement.value;
    const experience =experienceElement.value;
    const skills =skillsElement.value;

    const picFile = picInput.files?.[0]
    const picUrl = picFile ? URL.createObjectURL(picFile):"";



const resumeOutput = `
<h2>Resume</h2>
${picUrl ? `<img src=${picUrl} alt="Profile pucture" class"pic">`:""}
<p><strong>Name:</strong>${name} </p>
<p><strong>Email:</strong>${email} </p>
<p><strong>Phone Number:</strong>${phone}} </p>

<h2>Education</h2>
<p>${education} </p>
<h3>Experience</h3>
<p>${experience} </p>
<h3>Skills</h3>
<p>${skills} </p>
`;


const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}
else{
    console.error('The resume output data is missing')
}
}
})