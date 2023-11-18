const observer = new IntersectionObserver((entries) => {
  // Corrected the placement of parentheses
  entries.forEach((entry) => {
    // Corrected the placement of parentheses
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
