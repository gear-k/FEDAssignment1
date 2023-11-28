/* this is for when the user scrolls to, the user will see the text fade in */
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

document.addEventListener("DOMContentLoaded", function () {
  var filterButton = document.getElementById("filter-toggle");
  var filterContent = document.getElementById("filter-content");

  filterButton.addEventListener("click", function () {
    // Toggle the display of the filter content
    if (
      filterContent.style.display === "none" ||
      filterContent.style.display === ""
    ) {
      filterContent.style.display = "block";
    } else {
      filterContent.style.display = "none";
    }
  });
});
