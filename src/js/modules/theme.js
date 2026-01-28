import { CONFIG } from '../config/constants.js';

class ThemeManager {
  constructor() {
    this.body = document.body;
    this.currentTheme =
      localStorage.getItem(CONFIG.theme.storageKey) || CONFIG.theme.default;
  }

  init() {
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.sunIcon = this.themeToggleBtn?.querySelector('.sun-icon');
    this.moonIcon = this.themeToggleBtn?.querySelector('.moon-icon');

    if (!this.themeToggleBtn) return;

    this.applyTheme(this.currentTheme);
    this.attachEventListeners();
  }

  applyTheme(theme) {
    const isDark = theme === 'dark';
    this.body.classList.toggle('dark-theme', isDark);

    if (this.sunIcon && this.moonIcon) {
      this.sunIcon.style.display = isDark ? 'none' : 'block';
      this.moonIcon.style.display = isDark ? 'block' : 'none';
    }

    this.currentTheme = theme;
    localStorage.setItem(CONFIG.theme.storageKey, theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  attachEventListeners() {
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    this.themeToggleBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }
}

export const themeManager = new ThemeManager();
