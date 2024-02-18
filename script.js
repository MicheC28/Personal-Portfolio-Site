


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
const colors = ["#103434", "#216869F", "#9CC5A1", "#76b89f", "#468c72","#f5426c"];



const numBalls = 200;
const balls = [];

let windowHeight = window.innerHeight;

let heightDivisionFactor = 1.75;

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
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * windowHeight/heightDivisionFactor)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()*5}em`;
  ball.style.height = ball.style.width;
  ball.style.zIndex = "-1"; 
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});  


let homeButton = document.getElementById("nav-homepage");
let MiCheButton = document.getElementById("nav-MiChe");
let projectsButton = document.getElementById("nav-projects");

//Navigation Bar Elements for Projects Dropdown Menu
let projectsHomepage = document.getElementById("nav-projects-projectsHomepage");
let projectsIdeas = document.getElementById("nav-projects-ideas");
let projectsNotes = document.getElementById("nav-projects-notes");

//Navigation Bar Elements for MiChe Dropdown Menu
let MiCheHomepage = document.getElementById("nav-MiChe-Homepage");
let MiCheMinis = document.getElementById("nav-MiChe-Minis");
let MiCheIteration1 = document.getElementById("nav-MiChe-Iteration1");
let MiCheIndividuals = document.getElementById("nav-MiChe-Individuals");



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
projectsIdeas.addEventListener('click', go_to_projects_ideas_page);
projectsNotes.addEventListener('click', function(){
  alert("Sorry, still under construction!");
})

MiCheButton.addEventListener("click", go_to_MiChe_page);
MiCheHomepage.addEventListener('click', go_to_MiChe_page);
MiCheMinis.addEventListener('click', go_to_MiChe_Minis_page);
MiCheIteration1.addEventListener('click', go_to_MiChe_Iteration1_page);
MiCheIndividuals.addEventListener('click', go_to_MiChe_Individuals_page);


function go_to_projects_page(){
  const current = window.location.href;

  if(current == "https://michellechenportfolio.netlify.app/projects-page"){
    alert("You're already here silly!");
  } 
  else{
    window.location.href = 'Projects-page.html';
  }
}



function go_to_projects_ideas_page(){
  window.location.href = 'Projects-page.html#project_ideas';
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