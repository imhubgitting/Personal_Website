import { CONFIG } from '../config/constants.js';

class PrefetchManager {
  constructor() {
    this.prefetched = new Set();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupPrefetch());
    } else {
      this.setupPrefetch();
    }
  }

  prefetch(url) {
    if (this.prefetched.has(url)) return;
    if (url.startsWith('#') || url.startsWith('mailto:')) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'document';

    document.head.appendChild(link);
    this.prefetched.add(url);
  }

  setupPrefetch() {
    const links = document.querySelectorAll('a[href]');

    links.forEach((link) => {
      if (link.hasAttribute('download')) return;

      let timeout;

      link.addEventListener('mouseenter', () => {
        timeout = setTimeout(() => {
          const href = link.getAttribute('href');
          if (href) this.prefetch(href);
        }, CONFIG.ui.prefetchDelay);
      });

      link.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
      });

      link.addEventListener(
        'touchstart',
        () => {
          const href = link.getAttribute('href');
          if (href) this.prefetch(href);
        },
        { passive: true }
      );
    });
  }
}

export const prefetchManager = new PrefetchManager();
