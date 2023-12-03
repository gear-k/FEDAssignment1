// nav bar
function adjustNavListPosition() {
  var navbar = document.querySelector(".nav"); // Replace '.nav' with your navbar's class or ID
  var navList = document.querySelector(".nav-list");
  var navbarHeight = navbar.offsetHeight;

  navList.style.top = navbarHeight - 19 + "px";
}

// Adjust position on window resize
window.addEventListener("resize", adjustNavListPosition);

// Initial adjustment
window.onload = adjustNavListPosition;

/* this is for when the user scrolls to, the user will see the text fade in (index.html)*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // Corrected the typo
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); // Observing each hidden element

// slideshow for index.html
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 8000); // Change slide every 4 seconds
}

// sidebar for shopping.html
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// changing image for itempage.html
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector("a.toggle-nav");

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation() {
  this.nextElementSibling.classList.toggle("active");
}

productImages.forEach((image) => image.addEventListener("click", changeImage));
navItem.addEventListener("click", toggleNavigation);
