gsap.fromTo(".loading-page",{opacity:1},{opacity:0,duration:1.5,delay:3.5
})

gsap.matchMedia().add("(min-width: 481px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "50% 50%",
      end: "150% 50%",
      scrub: 2,
      pin: true
    }
  });

  tl
    .to("#center", { height: "100vh" }, 'a')
    .to("#top", { top: "-50%" }, 'a')
    .to("#bottom", { bottom: "-50%" }, 'a')
    .to("#top-h1", { top: "30%" }, 'a')
    .to("#bottom-h1", { bottom: "-30%" }, 'a')
    .to("#center-h1", { top: "-30%" }, 'a')
    .to(".content", { delay: -0.5, marginTop: "0%" });
});

// universal animation for all screens
gsap.from(".header-text", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});







const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random() * 1.5;
  this.alpha = Math.random();
  this.speed = Math.random() * 0.5;
  this.twinkle = Math.random() * 0.05;
}

Star.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
  ctx.fill();
};

Star.prototype.update = function () {
  this.alpha += this.twinkle;
  if (this.alpha <= 0 || this.alpha >= 1) this.twinkle = -this.twinkle;
  this.draw();
};

function createStars(num) {
  for (let i = 0; i < num; i++) {
    stars.push(new Star());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => star.update());
  requestAnimationFrame(animate);
}

createStars(200); // Number of stars
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  createStars(200);
});





  const roles = ["MERN Stack Developer", "React Enthusiast", "Node.js Backend Builder", "Clean Code Lover"];
  let index = 0;
  let charIndex = 0;
  const roleElement = document.getElementById("typing-role");

  function typeRole() {
    if (charIndex < roles[index].length) {
      roleElement.textContent += roles[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 70);
    } else {
      setTimeout(() => {
        roleElement.textContent = "";
        charIndex = 0;
        index = (index + 1) % roles.length;
        typeRole();
      }, 1500);
    }
  }

  document.addEventListener("DOMContentLoaded", typeRole);



// Toggle Side Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const closeBtn = document.querySelector(".close-btn");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  }
});


