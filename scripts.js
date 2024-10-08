<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyHub - Explore Fun Links</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-p6ZGukbNzXPTn2C/GoXD+AEVg+WC/nWjDZ94Z0Bo+0t3kcEQiB7GvefvBefGpP3Gj/qw+ndcjWUvdMJ4kNcGBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- Loading Spinner -->
    <div id="loading" class="loading-spinner">
        <div class="spinner"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-logo">MyHub</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#fun-links">Fun Links</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
            <li><a href="#" id="theme-toggle" aria-label="Toggle Theme"><i class="fas fa-moon"></i></a></li>
        </ul>
        <div class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="text-container">
                <h1 class="gradient-text">Welcome to MyHub</h1>
                <p class="normal-text">Explore a curated collection of fun and interesting websites just for you.</p>
                <button class="btn" id="get-started">Get Started</button>
            </div>
            <div class="linux-status">
                <p><i class="fas fa-check-circle"></i> Loaded</p>
                <p><i class="fas fa-spinner fa-spin"></i> Starting Services</p>
                <p><i class="fas fa-check-circle"></i> Services Running</p>
            </div>
        </div>
    </section>

    <!-- Fun Links Section -->
    <section id="fun-links" class="section">
        <h2 class="gradient-text">Fun Links</h2>
        <div class="content-container">
            <div class="card">
                <i class="fas fa-gamepad fa-3x"></i>
                <h3><a href="https://www.coolmathgames.com/" target="_blank" rel="noopener noreferrer">Cool Math Games</a></h3>
                <p>Play fun and challenging math-based games.</p>
            </div>
            <div class="card">
                <i class="fas fa-music fa-3x"></i>
                <h3><a href="https://www.azlyrics.com/" target="_blank" rel="noopener noreferrer">AZLyrics</a></h3>
                <p>Find lyrics to your favorite songs.</p>
            </div>
            <div class="card">
                <i class="fas fa-film fa-3x"></i>
                <h3><a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">IMDb</a></h3>
                <p>Explore movies, TV shows, and celebrities.</p>
            </div>
            <div class="card">
                <i class="fas fa-globe fa-3x"></i>
                <h3><a href="https://www.boredpanda.com/" target="_blank" rel="noopener noreferrer">Bored Panda</a></h3>
                <p>Discover amazing and creative stories.</p>
            </div>
            <div class="card">
                <i class="fas fa-laugh fa-3x"></i>
                <h3><a href="https://www.theonion.com/" target="_blank" rel="noopener noreferrer">The Onion</a></h3>
                <p>Read satirical news and articles.</p>
            </div>
            <div class="card">
                <i class="fas fa-book fa-3x"></i>
                <h3><a href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer">Goodreads</a></h3>
                <p>Find and share book recommendations.</p>
            </div>
            <div class="card">
                <i class="fas fa-camera fa-3x"></i>
                <h3><a href="https://www.unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></h3>
                <p>Browse high-quality free images.</p>
            </div>
            <div class="card">
                <i class="fas fa-paint-brush fa-3x"></i>
                <h3><a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer">DeviantArt</a></h3>
                <p>Showcase and discover artistic creations.</p>
            </div>
            <div class="card">
                <i class="fas fa-robot fa-3x"></i>
                <h3><a href="https://www.reddit.com/r/Fun/" target="_blank" rel="noopener noreferrer">Reddit Fun</a></h3>
                <p>Join the fun discussions on Reddit.</p>
            </div>
            <div class="card">
                <i class="fas fa-laptop-code fa-3x"></i>
                <h3><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></h3>
                <p>Learn to code for free.</p>
            </div>
            <div class="card">
                <i class="fas fa-car fa-3x"></i>
                <h3><a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">Tesla</a></h3>
                <p>Discover the future of electric vehicles.</p>
            </div>
            <div class="card">
                <i class="fas fa-book-open fa-3x"></i>
                <h3><a href="https://opentdb.com/" target="_blank" rel="noopener noreferrer">Open Trivia DB</a></h3>
                <p>Play trivia games and test your knowledge.</p>
            </div>
            <!-- Add more fun links as desired -->
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <h2 class="gradient-text">Contact</h2>
        <div class="contact-container">
            <form id="contact-form">
                <label for="contact-name">Name:</label>
                <input type="text" id="contact-name" name="contact-name" placeholder="Your Name" required>

                <label for="contact-email">Email:</label>
                <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2023 MyHub. All rights reserved. | <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </footer>

    <!-- Modal Structure (If needed in future) -->
    <!-- <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close-button" id="closeModal">&times;</span>
            <h2 id="modal-title">Title</h2>
            <img id="modal-image" src="" alt="Modal Image">
            <p id="modal-description">Description</p>
            <a href="#" id="modal-link" target="_blank">View More</a>
        </div>
    </div> -->

    <!-- JavaScript -->
    <script src="scripts.js"></script>
</body>
</html>
