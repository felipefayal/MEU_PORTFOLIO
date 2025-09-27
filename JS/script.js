document.addEventListener('DOMContentLoaded', function () {

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
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar o arquivo: ' + filePath);
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
          if (callback) {
            callback();
          }
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao carregar o componente:', error);
      });
  };

  loadComponent('header-placeholder', 'PARTIALS/header.html', initHamburgerMenu);
  loadComponent('footer-placeholder', 'PARTIALS/footer.html');

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length > 0 && tabContents.length > 0) {
    function handleTabClick(event) {
      const targetTabId = event.currentTarget.getAttribute('data-tab');
      const targetTabContent = document.getElementById(targetTabId);

      tabButtons.forEach(button => button.classList.remove('active'));
      event.currentTarget.classList.add('active');

      tabContents.forEach(content => content.classList.remove('active'));
      if (targetTabContent) {
        targetTabContent.classList.add('active');
      }
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterValue === 'all' || cardCategory === filterValue) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }
});