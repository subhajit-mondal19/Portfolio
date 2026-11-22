// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});


// Theme change dark & white
const thmchg=document.querySelector(".theme-change")
const html=document.documentElement

const savedtheme=localStorage.getItem("theme")
if(savedtheme){
  html.setAttribute("data-theme",savedtheme)
}

thmchg.addEventListener("click",()=>{

  const currentTheme=html.getAttribute("data-theme")

  const newTheme=currentTheme==="dark"?"light":"dark"
  

  html.setAttribute("data-theme",newTheme)

  localStorage.setItem("theme",newTheme)

})

//Adding Project Card

const projects=[
  {
    head:"Portfolio Site",
    desc:"The site you are looking at, built with HTML, CSS, and JavaScript.This is my first official project i made similar easy websites merely crossing 3 or 4 . But this was the start of my journey and today i am where i am. I have kept this project to say to the beginners who gets demotivated easily and thing its not their cup of tea. Remember every master was a Beginner..."

  },
  {
    head:"Forge-Distributed AI agent & Workflow Runtime",
    desc:"Users define workflows containing AI agents, tools, API calls, conditionals, parallel branches, and human approval steps. Your backend executes them reliably.Work In Progress..."
  },
  {
    head:"Atlas — Multi-Tenant AI Knowledge & Retrieval Engine",
    desc:"Build a backend platform that allows companies to upload documents, connect sources, and query their private knowledge using AI.Work In Progress..."
  },
  {
    head: "Weather Forecast App",
    desc: "A weather application that fetches real-time weather data using an external API and displays temperature, humidity, wind speed, and weather conditions based on the user's location."
  }

]

const projectlist=document.querySelector(".project-grid");

projects.forEach((project)=>{
  const card = document.createElement("article");
  const head=document.createElement ("h3");
  const desc=document.createElement("p");

  card.classList.add("card")
  head.classList.add("card-head")
  desc.classList.add("card-desc")

  head.textContent=project.head
  desc.textContent=project.desc

  card.append(head,desc)

  projectlist.append(card)
})