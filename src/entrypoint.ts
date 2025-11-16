import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
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
};
