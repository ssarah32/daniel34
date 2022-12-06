const navItems = Document.querySelector('.container')
const toggle = Document.querySelector(".toggle");


function toggleNav() {
  if (navItems.classList.contains("container__toggle")) {
      navItems.classList.remove("container__toggle");
      document.getElementById('icon').classList.toggle('fa-times');  
  
  } else {
      navItems.classList.add("container__toggle");
      document.getElementById('icon').classList.toggle('fa-times');  
      
  }
}

toggle.addEventListener("click", toggleNav, false);

