const collapseBtn = document.querySelector('.close-btn');
const expandBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const openModal = document.querySelectorAll('.pop-toggler');
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-header');
const projects = [
  {
    name: 'stories',
    title: 'Multi-Post Stories',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    src: './assets/Img-Placeholder.png',
    live: 'https://ambrose-kibet.github.io/portfolio/',
    sourceCode: 'https://github.com/ambrose-kibet/portfolio',
  },
  {
    name: 'printing',
    title: 'Profesional Art Printing Data',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'Ruby'],
    src: './assets/card-bg.png',
    live: 'https://ambrose-kibet.github.io/portfolio/',
    sourceCode: 'https://github.com/ambrose-kibet/portfolio',
  },
  {
    name: 'dashboard',
    title: 'Data Dashboard Healthcare',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'Ruby'],
    src: './assets/dashboard-card.png',
    live: 'https://ambrose-kibet.github.io/portfolio/',
    sourceCode: 'https://github.com/ambrose-kibet/portfolio',
  },
  {
    name: 'portfolio',
    title: 'Website Protfolio',
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    tech: ['html', 'bootstrap', 'Ruby'],
    src: './assets/porfolio-card.png',
    live: 'https://ambrose-kibet.github.io/portfolio/',
    sourceCode: 'https://github.com/ambrose-kibet/portfolio',
  },
];
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
openModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectName = e.target.parentElement.parentElement.dataset.name;
      const {
      title,
      info,
      tech,
      src,
      live,
      sourceCode,
    } = projects.find(
      (item) => item.name === projectName,
    );
    const modalContent = `<h3 class="card-title">
                  ${title}
                </h3>
                <ul class="tech-container">
                ${tech.map((tech) => `<li class="tech">${tech}</li>`)}
                </ul>
                <div class="project-card">
                  <div class="pop-img-container">
                    <img
                      src="${src}"
                      alt="${title}"
                      class="card-header-img"
                    />
                  </div>
                  <div class="modal-body">
                    <p class="card-info">
                     ${info}
                    </p>
                    <div class="btns-container">
                      <a class="btn" target="_blank"  href="${live}">
                        See Live <img src="./assets/link.svg" alt="link-icon"
                      /></a>
                      <a class="btn"href="${sourceCode}"
                        >See Source <img src="./assets/git.svg" alt="git icon"
                      /></a>
                    </div>
                  </div>
                </div>
              `;

    modalContainer.innerHTML = modalContent;
    modal.classList.add('show-modal');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
