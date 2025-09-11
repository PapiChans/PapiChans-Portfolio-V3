document.addEventListener("DOMContentLoaded", () => {
// Navbar Theme Start
  const themeToggle = document.querySelector('.navbar-icon i.fa-moon');

  if (!themeToggle) return;

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeToggle.classList.remove('fa-regular', 'fa-moon');
    themeToggle.classList.add('fa-solid', 'fa-sun');
  }

  themeToggle.parentElement.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
      themeToggle.classList.remove('fa-regular', 'fa-moon');
      themeToggle.classList.add('fa-solid', 'fa-sun');
    } else {
      themeToggle.classList.remove('fa-solid', 'fa-sun');
      themeToggle.classList.add('fa-regular', 'fa-moon');
    }
  });
// Navbar Theme End

// Sidebar Function Start
  const openSidebarBtn = document.getElementById('openSidebar');
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarShadow = document.getElementById('sidebarShadow');
  const sidebarItems = document.querySelectorAll('.sidebar-list-item');

  openSidebarBtn.addEventListener('click', () => {
      sidebarMenu.classList.add('active');
      sidebarShadow.classList.add('active');
  });

  closeSidebarBtn.addEventListener('click', closeSidebar);

  sidebarShadow.addEventListener('click', closeSidebar);

  sidebarItems.forEach(item => {
    item.addEventListener('click', closeSidebar);
  });

  function closeSidebar() {
      sidebarMenu.classList.remove('active');
      sidebarShadow.classList.remove('active');
  }

// Sidebar Function End

// Active Section Start
  const navItems = document.querySelectorAll('.navbar-category-list-item');
  const sideItems = document.querySelectorAll('.sidebar-list-item');
  const allCards = document.querySelectorAll('.main-card');

  function activateSection(sectionId) {
    const targetCardId = `card-${sectionId}`;
    const currentCard = document.querySelector('.main-card.active');
    const nextCard = document.getElementById(targetCardId);

    if (currentCard === nextCard) return;

    if (currentCard) {
        currentCard.classList.remove('active');
    }

    setTimeout(() => {
        nextCard.classList.add('active');
    }, 0);
  }

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          const target = item.getAttribute('data-target');
          activateSection(target);
      });
  });

  sideItems.forEach(item => {
      item.addEventListener('click', () => {
          const target = item.getAttribute('data-target');
          activateSection(target);
      });
  });

});
