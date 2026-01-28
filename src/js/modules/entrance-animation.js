import { CONFIG } from '../config/constants.js';

class EntranceAnimationManager {
  init() {
    window.addEventListener('load', () => {
      document.body.style.opacity = '0';
      document.body.style.transition = `opacity ${CONFIG.ui.animationDuration}ms ease-in`;

      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 10);
    });
  }
}

export const entranceAnimationManager = new EntranceAnimationManager();
