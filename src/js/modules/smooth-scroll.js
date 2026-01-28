class SmoothScrollManager {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
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
  }
}

export const smoothScrollManager = new SmoothScrollManager();
