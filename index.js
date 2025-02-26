const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

document.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu.classList.remove('show-menu');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
});

hamburgerBtn.addEventListener('click', () => {
  const isMenuOpen = hamburgerMenu.classList.toggle('show-menu');
  
  hamburgerBtn.setAttribute('aria-expanded', isMenuOpen.toString());
});

document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

hamburgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
    if (document.activeElement.tagName.toLowerCase() === 'a') {
      hamburgerBtn.focus();
    }
    
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !hamburgerMenu.classList.contains('show-menu')) {
    e.preventDefault();
  }
});