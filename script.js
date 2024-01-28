


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

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 200)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 400)}vh`;
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



homeButton.addEventListener("click", go_to_home_page);

function go_to_home_page(){
  const current = window.location.href;
  if (current == "file:///C:/Users/miche/Documents/GitHub/Portfolio/index.html"){
    alert("You're already here silly!");
  }
  else{
    window.location.href ='index.html';
  }
}

MiCheButton.addEventListener("click", function(){
  alert("Sorry, still under construction!");
})

projectsButton.addEventListener('click', go_to_projects_page);

function go_to_projects_page(){
  const current = window.location.href;

  if(current == "file:///C:/Users/miche/Documents/GitHub/Portfolio/Projects-page.html"){
    alert("You're already here silly!");
  }
  else{
    window.location.href = 'Projects-page.html';
  }
}