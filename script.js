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