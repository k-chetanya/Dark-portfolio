// script.js
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("✨ Thank you! I'll get back to you soon.");
        contactForm.reset();
    });
}

// Typing Animation for Hero Section
const typingSpan = document.querySelector('.typing-text');
if (typingSpan) {
    const roles = ["A Frontend Developer", "MERN Stack Dev", "Open Source Enthusiast"];
    let idx = 0;
    let charIdx = 0;
    
    function typeEffect() {
        if (charIdx <= roles[idx].length) {
            typingSpan.innerText = roles[idx].substring(0, charIdx);
            charIdx++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                idx = (idx + 1) % roles.length;
                charIdx = 0;
                typeEffect();
            }, 2200);
        }
    }
    
    typeEffect();
}

// Smooth scrolling for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
