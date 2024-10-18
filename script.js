//  js to the section of projects , contact and footer
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll('.observed');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  projects.forEach(project => {
    observer.observe(project);
  });
});
//  js to the section of intro 

document.addEventListener("DOMContentLoaded", () => {
  const elementsX = document.querySelectorAll('.observed-x');

  const observerX = new IntersectionObserver((entries, observerX) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view-x');
        observerX.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  elementsX.forEach(element => {
    observerX.observe(element);
  });
});
