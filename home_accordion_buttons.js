let projectButton_Clipboard = document.getElementById("accordion-buttons-Clipboard");
let projectButton_Medication = document.getElementById("accordion-buttons-Medication");
let projectButton_Portfolio = document.getElementById("accordion-buttons-Portfolio");
let projectButton_Windsor = document.getElementById("accordion-buttons-Windsor");
let projectButton_RR = document.getElementById("accordion-buttons-RR");



projectButton_Clipboard.addEventListener("click", go_to_projects_page_Clipboard);
projectButton_Medication.addEventListener('click', go_to_projects_page_Medication);
projectButton_Portfolio.addEventListener('click', go_to_projects_page_Portfolio);
projectButton_Windsor.addEventListener('click', go_to_projects_page_Windsor);
projectButton_RR.addEventListener('click', go_to_projects_page_RR); // fix this

function go_to_projects_page_Clipboard(){
  window.location.href='Projects-page.html';
}

function go_to_projects_page_Medication(){
  window.location.href='Projects-page.html#projects-Medication';
}


function go_to_projects_page_Portfolio(){
  window.location.href='Projects-page.html#projects-Portfolio';
}

function go_to_projects_page_Windsor(){
  window.location.href='Projects-page.html#projects-Windsor';
}

function go_to_projects_page_RR(){
    window.location.href='Projects-page.html#projects-RR';
}
