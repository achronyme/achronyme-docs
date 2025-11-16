import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  // Register custom Alpine.js directives and magic properties here

  // Theme management
  Alpine.store('theme', {
    value: 'light',

    init() {
      this.value = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      this.apply();
    },

    toggle() {
      this.value = this.value === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.value);
      this.apply();
    },

    apply() {
      if (this.value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  // Mobile navigation state
  Alpine.store('nav', {
    open: false,

    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    }
  });

  // Search state
  Alpine.store('search', {
    open: false,
    query: '',

    toggle() {
      this.open = !this.open;
      if (this.open) {
        this.query = '';
      }
    },

    close() {
      this.open = false;
      this.query = '';
    }
  });
};
