const collapseBtn = document.querySelector('.close-btn');
const expandBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
expandBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
collapseBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });
});
