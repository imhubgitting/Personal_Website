class SmoothScrollManager {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        // Skip external links (like #linkedin, #github which don't have targets)
        if (
          href !== '#linkedin' &&
          href !== '#github' &&
          !href.startsWith('#link')
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
  }
}

export const smoothScrollManager = new SmoothScrollManager();
