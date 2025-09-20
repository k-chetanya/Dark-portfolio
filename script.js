
// Typing Effect
const typingText = document.querySelector(".typing-text");
const cursor = document.querySelector(".typing-cursor");
const phrases = ["A Frontend Developer ", "A UI/UX Designer ", "A Problem Solver "];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        delay = 1000; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 200;
    } else {
        delay = isDeleting ? 50 : 100;
    }

    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }
});

const animateOnScroll = () => {
    const cards = document.querySelectorAll('.skill-card, .project-card, .profile-card');
    const contact = document.querySelector('#contact');

    // Animate all card elements
    cards.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (elTop < screenPos) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    // Animate #contact section
    if (contact) {
        const contactTop = contact.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (contactTop < screenPos) {
            contact.style.opacity = '1';
            contact.style.transform = 'translateY(0)';
        }
    }
};

// Initial state
document.querySelectorAll('.skill-card, .project-card, .profile-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Initial state for contact section
const contact = document.querySelector('#contact');
if (contact) {
    contact.style.opacity = '0';
    contact.style.transform = 'translateY(20px)';
    contact.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
