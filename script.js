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
thmchg.addEventListener("click",()=>{

  const html=document.documentElement
  const flag=html.getAttribute("data-theme")

  if(flag==='light'){
    html.setAttribute("data-theme","dark")
  }
  else{
    html.setAttribute("data-theme","light")
  }

})