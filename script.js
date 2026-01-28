// Theme Toggle Functionality
(function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    // Toggle theme function
    function toggleTheme() {
        const isDark = body.classList.toggle('dark-theme');

        if (isDark) {
            // Switch to dark theme
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    }

    // Add click event listener to theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Add keyboard support (Enter and Space keys)
    themeToggleBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
})();

// Smooth scroll for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only prevent default for actual anchor links, not placeholder #links
        if (href !== '#linkedin' && href !== '#github' &&
            !href.startsWith('#link') && !href.startsWith('#projects') &&
            !href.startsWith('#articles') && !href.startsWith('#about')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add subtle entrance animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';

    // Trigger animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);
});
