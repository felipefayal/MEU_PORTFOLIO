document.addEventListener('DOMContentLoaded', function () {

  const getBasePath = () => {
    const path = window.location.pathname;

    if (path.includes('/pages/')) {
      return '../../';
    }

    return './';
  };

  const basePath = getBasePath();

  const initHamburgerMenu = () => {

    const menuHamburger = document.querySelector('.menu-hamburger-icon');
    const navMobile = document.querySelector('.nav-mobile');

    if (menuHamburger && navMobile) {
      menuHamburger.addEventListener('click', () => {
        navMobile.classList.toggle('active');
        menuHamburger.classList.toggle('active');
      });
    }
  };

  const loadComponent = (elementId, filePath, callback) => {

    const fullPath = basePath + filePath;

    fetch(fullPath)
      .then(response => {
        if (!response.ok) throw new Error(`Erro ao carregar ${fullPath}: ${response.statusText}`);
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
          
          if (basePath !== './') {
            adjustLinksInsideComponent(element, basePath);
          }

          if (callback) callback();
        }
      })
      .catch(error => console.error('Erro no componente:', error));
  };

  const adjustLinksInsideComponent = (container, prefix) => {
    
    const links = container.querySelectorAll('a[href^="pages/"], a[href^="index.html"], a[href^="assets/"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      link.setAttribute('href', prefix + href);
    });

    const images = container.querySelectorAll('img[src^="assets/"]');
    images.forEach(img => {
      const src = img.getAttribute('src');
      img.setAttribute('src', prefix + src);
    });
  };

  loadComponent('header-placeholder', 'includes/header.html', initHamburgerMenu);
  loadComponent('footer-placeholder', 'includes/footer.html');
});