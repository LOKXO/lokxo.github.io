// scripts.js

document.addEventListener('DOMContentLoaded', () => {
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
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close the nav menu on mobile after clicking
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('toggle');
                }
            }
        });
    });

    // Get Started Button Scroll
    const getStartedBtn = document.getElementById('get-started');
    getStartedBtn.addEventListener('click', () => {
        document.getElementById('upload').scrollIntoView({
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

    // Modal Functionality
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    window.openModal = function(itemId) {
        // Fetch item details based on itemId
        // This should be replaced with actual data fetching
        // For demonstration, we'll use static data
        const data = getItemData(itemId);
        if(data) {
            modalTitle.textContent = data.title;
            modalImage.src = data.image;
            modalDescription.textContent = data.description;
            modalLink.href = data.link;
            modal.style.display = 'block';
        }
    }

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Loading Spinner
    const loading = document.getElementById('loading');

    function showLoading() {
        loading.style.display = 'flex';
    }

    function hideLoading() {
        loading.style.display = 'none';
    }

    // Fetch and Display Content
    function getItemData(itemId) {
        // Placeholder function for fetching data
        // Replace this with actual data fetching logic
        const items = {
            'app1': {
                title: 'Awesome App',
                image: 'https://via.placeholder.com/600x400',
                description: 'This is an awesome app that does amazing things.',
                link: '#'
            },
            'code1': {
                title: 'Cool Repository',
                image: 'https://via.placeholder.com/600x400',
                description: 'This repository contains cool code for various projects.',
                link: '#'
            }
            // Add more items as needed
        };
        return items[itemId];
    }

    // Handle Upload Form Submission
    const uploadForm = document.getElementById('upload-form');
    const appsContainer = document.getElementById('apps-container');
    const codeContainer = document.getElementById('code-container');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showLoading();

        // Get form data
        const type = document.getElementById('type').value;
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const file = document.getElementById('file').files[0];

        // Validate file (basic validation)
        if(!file) {
            alert('Please select a file to upload.');
            hideLoading();
            return;
        }

        // Simulate upload process
        setTimeout(() => {
            // Normally, here you would send the data to the server
            // For demonstration, we'll add the item to the respective container

            const itemId = `${type}${Date.now()}`;
            const item = {
                id: itemId,
                title: title,
                description: description,
                image: URL.createObjectURL(file),
                link: '#'
            };

            addItemToDOM(type, item);
            uploadForm.reset();
            hideLoading();
            alert('Upload successful!');
        }, 2000);
    });

    // Function to Add Item to DOM
    function addItemToDOM(type, item) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('onclick', `openModal('${item.id}')`);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const h3 = document.createElement('h3');
        h3.textContent = item.title;

        const p = document.createElement('p');
        p.textContent = item.description;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);

        if(type === 'app') {
            appsContainer.appendChild(card);
        } else if(type === 'code') {
            codeContainer.appendChild(card);
        }
    }

    // Handle Contact Form Submission
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
