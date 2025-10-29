document.body.classList.add("loading");
gsap.fromTo(".loading-page",{opacity:1},{opacity:0,duration:1.5,delay:2.8,onComplete: () => {
      document.querySelector(".loading-page").style.display = "none";
      document.body.classList.remove("loading"); // re-enable scroll
      window.scrollTo(0, 0); 
    }
})

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// ---- ADDED NAVBAR HIDE/SHOW HERE ----
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) navbar.style.top = '0';
  else if (currentScroll > lastScroll) navbar.style.top = '-100px';
  else navbar.style.top = '0';
  lastScroll = currentScroll;
});

gsap.matchMedia().add("(min-width: 481px)", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#project", // trigger the new section
      start: "top top",
       end: "bottom top",  
      scrub: 2,
      pin: true,
       pinSpacing: true,
    }
  });

  tl.to("#project-center", { height: "100vh" }, 'a')
    .to("#top", { top: "-50%" }, 'a')
    .to("#bottom", { bottom: "-50%" }, 'a')
    .to("#top-h1", { top: "60%" }, 'a')
    .to("#bottom-h1", { bottom: "-30%" }, 'a')
    .to(".project-content", { delay: -0.5, marginTop: "0%" })
     // 👇 added reverse animation so it closes naturally when scrolling out
    .to("#top", { top: "0%" }, "b")
    .to("#bottom", { bottom: "0%" }, "b")
    .to("#top-h1", { top: "60%" }, "b")
    .to("#bottom-h1", { top: "-40%" }, "b")
    .to("#project-center", { height: "0vh" }, "b");
});

gsap.from(".services-list div", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
});



