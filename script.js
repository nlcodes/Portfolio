// First, check last page's theme and apply it
const lastPageTheme = sessionStorage.getItem('lastPageTheme');
if (lastPageTheme) {
  document.documentElement.dataset.theme = lastPageTheme;
}

// Save current theme as last page's theme
window.addEventListener('beforeunload', () => {
  const currentTheme = document.documentElement.dataset.theme;
  sessionStorage.setItem('lastPageTheme', currentTheme);
});

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    project.addEventListener('click', () => {
      project.classList.toggle('active');
      
      const expandSymbol = project.querySelector('.expand');
      expandSymbol.textContent = project.classList.contains('active') ? '−' : '+';
      
      if (project.classList.contains('active')) {
        const projectRect = project.getBoundingClientRect();
        const isInView = (projectRect.top >= 0) && (projectRect.bottom <= window.innerHeight);
        
        if (!isInView) {
          project.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    });
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  // Set initial button state based on current theme
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '☼' : '☽';

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    sessionStorage.setItem('lastPageTheme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☼' : '☽';
  });
});
