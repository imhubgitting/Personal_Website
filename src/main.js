import './styles/main.css';

import { themeManager } from './js/modules/theme.js';
import { emailCopyManager } from './js/modules/email-copy.js';
import { prefetchManager } from './js/modules/prefetch.js';
import { smoothScrollManager } from './js/modules/smooth-scroll.js';
import { entranceAnimationManager } from './js/modules/entrance-animation.js';

function initApp() {
  themeManager.init();
  emailCopyManager.init();
  prefetchManager.init();
  smoothScrollManager.init();
  entranceAnimationManager.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
