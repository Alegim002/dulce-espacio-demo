const menuButton = document.querySelector('[data-menu]');
const navLinks = document.querySelector('[data-nav-links]');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const demoForm = document.querySelector('[data-demo-form]');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('[data-demo-message]');
    message?.classList.add('show');
    message?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

