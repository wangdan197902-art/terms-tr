// Main JS
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Language switcher
  const langTrigger = document.querySelector('.lang-trigger');
  const langMenu = document.querySelector('.lang-menu');
  langTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle('open');
  });
  document.addEventListener('click', () => langMenu?.classList.remove('open'));
});
