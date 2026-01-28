import { CONFIG } from '../config/constants.js';

class EmailCopyManager {
  init() {
    this.emailContainer = document.getElementById('email-copy');
    this.copyToast = document.getElementById('copy-toast');
    if (!this.emailContainer || !this.copyToast) return;
    this.attachEventListeners();
  }

  showToast() {
    this.copyToast.classList.add('show');
    setTimeout(() => {
      this.copyToast.classList.remove('show');
    }, CONFIG.ui.toastDuration);
  }

  async copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONFIG.email);
        this.showToast();
      } else {
        this.fallbackCopyEmail();
      }
    } catch {
      this.fallbackCopyEmail();
    }
  }

  fallbackCopyEmail() {
    const textArea = document.createElement('textarea');
    textArea.value = CONFIG.email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      this.showToast();
    } catch {
      // Silently fail if copy doesn't work
    }

    document.body.removeChild(textArea);
  }

  attachEventListeners() {
    this.emailContainer.addEventListener('click', () => this.copyEmail());
    this.emailContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.copyEmail();
      }
    });
  }
}

export const emailCopyManager = new EmailCopyManager();
