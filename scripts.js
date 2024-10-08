// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Show Loading Spinner
    const loading = document.getElementById('loading');
    window.onload = () => {
        setTimeout(() => { // Simulate loading delay
            loading.classList.add('hidden');
        }, 1000);
    };

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !href.includes('github.com')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // Close the nav menu on mobile after clicking
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('toggle');
                }
            }
        });
    });

    // Get Started Button Scroll
    const getStartedBtn = document.getElementById('get-started');
    getStartedBtn.addEventListener('click', () => {
        document.getElementById('fun-links').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Load theme from localStorage
    if(localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if(body.classList.contains('light-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Ripple Effect for Buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const diameter = Math.max(btn.clientWidth, btn.clientHeight);
            const radius = diameter / 2;
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
            ripple.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
            btn.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Fade-In Loaded Content
    const sections = document.querySelectorAll('.section, .content-container, .card, .contact-container, footer');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                section.classList.add('loaded');
            }
        });
    });

    // Initial check in case content is already in view
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.classList.add('loaded');
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showLoading();

        // Get form data
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if(!name || !email || !message) {
            alert('Please fill in all fields.');
            hideLoading();
            return;
        }

        // Simulate sending message
        setTimeout(() => {
            // Normally, here you would send the data to the server
            // For demonstration, we'll just reset the form
            contactForm.reset();
            hideLoading();
            alert('Message sent successfully!');
        }, 2000);
    });
});
