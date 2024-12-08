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
});
