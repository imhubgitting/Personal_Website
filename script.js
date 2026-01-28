// Theme Toggle Functionality
(function () {
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
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Only prevent default for actual anchor links, not placeholder #links
    if (
      href !== '#linkedin' &&
      href !== '#github' &&
      !href.startsWith('#link') &&
      !href.startsWith('#projects') &&
      !href.startsWith('#articles') &&
      !href.startsWith('#about')
    ) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
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

// Copy Email to Clipboard Functionality
(function () {
  const emailContainer = document.getElementById('email-copy');
  const copyToast = document.getElementById('copy-toast');
  const emailAddress = 'gavinaantonacci@gmail.com';

  function showToast() {
    copyToast.classList.add('show');
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2000);
  }

  function copyEmail() {
    // Use the modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(emailAddress)
        .then(() => {
          showToast();
        })
        .catch((err) => {
          console.error('Failed to copy email: ', err);
          // Fallback for older browsers
          fallbackCopyEmail();
        });
    } else {
      // Fallback for older browsers
      fallbackCopyEmail();
    }
  }

  function fallbackCopyEmail() {
    const textArea = document.createElement('textarea');
    textArea.value = emailAddress;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      console.error('Fallback: Failed to copy email', err);
    }
    document.body.removeChild(textArea);
  }

  // Click event
  emailContainer.addEventListener('click', copyEmail);

  // Keyboard support (Enter and Space keys)
  emailContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copyEmail();
    }
  });
})();

// Instant Page Loading - Prefetch links on hover
(function () {
  const prefetched = new Set();

  function prefetch(url) {
    // Don't prefetch if already done
    if (prefetched.has(url)) return;

    // Don't prefetch anchor links or mailto links
    if (url.startsWith('#') || url.startsWith('mailto:')) return;

    // Create prefetch link
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'document';

    document.head.appendChild(link);
    prefetched.add(url);
  }

  // Add hover listeners to all links
  function setupPrefetch() {
    const links = document.querySelectorAll('a[href]');

    links.forEach((link) => {
      // Skip if it's a download link
      if (link.hasAttribute('download')) return;

      let timeout;

      // Prefetch on mouseenter with slight delay
      link.addEventListener('mouseenter', () => {
        timeout = setTimeout(() => {
          const href = link.getAttribute('href');
          if (href) prefetch(href);
        }, 65); // 65ms delay to avoid prefetching when quickly moving mouse
      });

      // Clear timeout if mouse leaves quickly
      link.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
      });

      // Also prefetch on touchstart for mobile
      link.addEventListener(
        'touchstart',
        () => {
          const href = link.getAttribute('href');
          if (href) prefetch(href);
        },
        { passive: true }
      );
    });
  }

  // Initialize when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPrefetch);
  } else {
    setupPrefetch();
  }
})();
