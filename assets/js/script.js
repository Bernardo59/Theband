// Carroussel for band
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sl__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;} 
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

// Close windows "Buy Ticket" when user click 
let buy_tickets = document.getElementById("buy-tickets");
window.onclick = function(event) {
  if (event.target == buy_tickets) {
    buy_tickets.style.display = "none";
  }
}

// Show / Hide Menu Bars when user click
let menuBarsActived = false;
function showMenuBars() {
  let x = document.getElementById("nav__menu-bars");
  if ((x.style.display == "none" || x.style.display == "") && menuBarsActived == false) {
    menuBarsActived = true;
    x.style.display = "flex";
    }
    else {
      menuBarsActived = false;
      x.style.display = "none";
    }
  }

// Hide Menu Bars when screen > 600 px
function hideMenuBars() {
  if (window.innerWidth > 600) {
    let x = document.getElementById("nav__menu-bars");
    x.style.display = "none";
    menuBarsActived = false;
  }
}

window.addEventListener('resize', hideMenuBars)