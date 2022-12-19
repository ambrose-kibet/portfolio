const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
openBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });
});
