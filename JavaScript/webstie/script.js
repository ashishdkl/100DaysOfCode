// Select important elements for interactivity
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const darkToggle = document.getElementById('dark-toggle');
const searchInput = document.getElementById('search-input');
const subjectCards = document.querySelectorAll('.subject-card');

// Toggle mobile menu visibility
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Handle dark mode state and save preference to localStorage
function setDarkMode(active) {
  document.body.classList.toggle('dark-mode', active);
  darkToggle.textContent = active ? 'Light' : 'Dark';
  localStorage.setItem('bca-notes-dark', active ? 'true' : 'false');
}

const savedTheme = localStorage.getItem('bca-notes-dark');
setDarkMode(savedTheme === 'true');

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setDarkMode(!isDark);
});

// Search notes and filter subject cards by heading or description text
function filterNotes(query) {
  const normalizedQuery = query.trim().toLowerCase();
  subjectCards.forEach((card) => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const matches = title.includes(normalizedQuery) || description.includes(normalizedQuery);
    card.style.display = matches || normalizedQuery === '' ? 'block' : 'none';
  });
}

searchInput.addEventListener('input', (event) => {
  filterNotes(event.target.value);
});

// Close mobile navigation when a link is clicked
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

// Safety: ensure dark mode text remains readable when switching themes
window.addEventListener('DOMContentLoaded', () => {
  if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }
});
