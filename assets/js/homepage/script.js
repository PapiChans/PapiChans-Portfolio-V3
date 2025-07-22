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
});
