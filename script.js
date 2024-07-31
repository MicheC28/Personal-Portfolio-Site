


window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    document.getElementById("navbar").style.top = "0px";
    // if (window.scrollY > 20) {
    //   document.getElementById("navbar").style.top = "0px";
    // } else {
    //   document.getElementById("navbar").style.top = "-80px";
    //   console.log("hello");
    // }
  }
 
 
// Some random colors
const colors = ["#216869F", "#9CC5A1", "#76b89f", "#468c72","#f5426c"];



const numBalls = 200;
const balls = [];

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let heightDivisionFactor = 2;

if(window.location.href == "file:///C:/Users/miche/Documents/GitHub/Portfolio/MiChe.html"){
  heightDivisionFactor = 2.5;
}else if(window.location.href == "file:///C:/Users/miche/Documents/GitHub/Portfolio/Projects-page.html"){
  heightDivisionFactor = 1.5;
} else if (window.location.href == "file:///C:/Users/miche/Documents/GitHub/Portfolio/MiChe_Minis.html"){
  heightDivisionFactor = 3.5;
} else if (window.location.href == "file:///C:/Users/miche/Documents/GitHub/Portfolio/MiChe_Individuals.html"){
  heightDivisionFactor = 1.25;
} else if (window.location.href == "file:///C:/Users/miche/Documents/GitHub/Portfolio/MiChe_Iteration1.html"){
  heightDivisionFactor = 2.75;
}



for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * windowHeight/heightDivisionFactor)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()*5}em`;
  ball.style.height = ball.style.width;
  ball.style.zIndex = "-1"; 
  
  balls.push(ball);
  document.body.append(ball);
}

const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Keyframes
balls.forEach((el, i, ra) => {
  // Generate random target positions for the animation
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11), // Random x offset (negative for even-indexed balls)
    y: Math.random() * 12 // Random y offset
  };

  // Define the animation for each ball element
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" }, // Initial state: no translation
      { transform: `translate(${to.x}rem, ${to.y}rem)` } // Final state: translated to the random position
    ],
    {
      duration: (Math.random() + 1) * 2000, // Duration between 2000ms and 4000ms
      direction: "alternate", // Animation alternates between forward and reverse
      fill: "both", // Maintain the state at the end of each iteration
      iterations: Infinity, // Loop the animation infinitely
      easing: "ease-in-out" // Easing function for smooth animation
    }
  );
});



let homeButton = document.getElementById("nav-homepage");
let MiCheButton = document.getElementById("nav-MiChe");
let projectsButton = document.getElementById("nav-projects");

//Navigation Bar Elements for Projects Dropdown Menu
let projectsHomepage = document.getElementById("nav-projects-projectsHomepage");
// let projectsIdeas = document.getElementById("nav-projects-ideas");
let projectsNotes = document.getElementById("nav-projects-notes");

// new
let projects_DigitalClip = document.getElementById("nav-projects-digitalClip");
let projects_AlertMed = document.getElementById("nav-projects-AlertMed");
let projects_Portfolio = document.getElementById("nav-projects-Portfolio");
let projects_Windsor = document.getElementById("nav-projects-Windsor");
let projects_RainyRiches = document.getElementById("nav-projects-RainyRiches");


//Navigation Bar Elements for MiChe Dropdown Menu
let MiCheHomepage = document.getElementById("nav-MiChe-Homepage");
let MiCheMinis = document.getElementById("nav-MiChe-Minis");
let MiCheIteration1 = document.getElementById("nav-MiChe-Iteration1");
let MiCheIndividuals = document.getElementById("nav-MiChe-Individuals");

// //miche home
// let MiCheHomeButton_Minis = document.getElementById("button-to-Minis-Collection");
// let MiCheHomeButton_Iteration1 = document.getElementById("button-to-Iteration1-Collection");
// let MiCheHomeButton_Individuals = document.getElementById("button-to-Individuals");



homeButton.addEventListener("click", go_to_home_page);

function go_to_home_page(){
  const current = window.location.href;
  if (current == "https://michellechenportfolio.netlify.app/index.html"){
    alert("You're already here silly!");
  }
  else{
    window.location.href ='index.html';
  }
}




projectsButton.addEventListener('click', go_to_projects_page);
projectsHomepage.addEventListener('click', go_to_projects_page);
// projectsIdeas.addEventListener('click', go_to_projects_ideas_page);
projectsNotes.addEventListener('click', function(){
  alert("Sorry, still under construction!");
})

// new
projects_DigitalClip.addEventListener('click', go_to_projects_page_DigitalClip);
projects_AlertMed.addEventListener('click', go_to_projects_page_AlertMed);
projects_Portfolio.addEventListener('click', go_to_projects_page_Portfolio);
projects_Windsor.addEventListener('click', go_to_projects_page_Windsor);
projects_RainyRiches.addEventListener('click',go_to_projects_page_RainyRiches);

//miche nav
MiCheButton.addEventListener("click", go_to_MiChe_page);
MiCheHomepage.addEventListener('click', go_to_MiChe_page);
MiCheMinis.addEventListener('click', go_to_MiChe_Minis_page);
MiCheIteration1.addEventListener('click', go_to_MiChe_Iteration1_page);
MiCheIndividuals.addEventListener('click', go_to_MiChe_Individuals_page);

// //miche home
// MiCheHomeButton_Minis.addEventListener('click', go_to_MiChe_Minis_page);
// MiCheHomeButton_Iteration1.addEventListener('click',go_to_MiChe_Iteration1_page);
// MiCheHomeButton_Individuals.addEventListener('click',go_to_MiChe_Individuals_page);



function go_to_projects_page(){
  window.location.href = 'Projects-page.html';
  
}



function go_to_projects_ideas_page(){
  window.location.href = 'Projects-page.html#project_ideas';
}


//new 
function go_to_projects_page_DigitalClip(){
  window.location.href = 'Projects-page-DigitalClip.html';
}

function go_to_projects_page_AlertMed(){
  window.location.href='Projects-page-AlertMed.html';
}

function go_to_projects_page_Portfolio(){
  window.location.href='Projects-page-Portfolio.html';
}

function go_to_projects_page_Windsor(){
  window.location.href='Projects-page-WindsorHousing.html';
}

function go_to_projects_page_RainyRiches(){
  window.location.href='Projects-page-RainyRiches.html';
}


function go_to_MiChe_page(){
  window.location.href = 'MiChe.html';
}

function go_to_MiChe_Minis_page(){
  window.location.href='MiChe_Minis.html';
}

function go_to_MiChe_Iteration1_page(){
  window.location.href='MiChe_Iteration1.html';
}

function go_to_MiChe_Individuals_page(){
  window.location.href='MiChe_Individuals.html';
}


  


console.log(window.innerWidth);