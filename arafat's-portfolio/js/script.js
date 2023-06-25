// Navbar Menu//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll sections active link//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky Navbar //
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove menu navbar when click navbar link //
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// dark and light mode //
let dartModeIcon = document.querySelector("#darkMode-icon");

dartModeIcon.onclick = () => {
  dartModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// scroll reveal animation
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading, .footer", {
  origin: "top",
});

ScrollReveal().reveal(".animation, .projects-box, .contact form", {
  origin: "bottom",
});

ScrollReveal().reveal(".home-content h1, .about-img img", {
  origin: "left",
});

ScrollReveal().reveal(".home-content h3, .home-content p,.about-content", {
  origin: "right",
});
