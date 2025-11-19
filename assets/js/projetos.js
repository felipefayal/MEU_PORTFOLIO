document.addEventListener('DOMContentLoaded', function () {
  
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          
          if (filterValue === 'all' || cardCategory === filterValue) {
            card.classList.remove('hide');
            
            card.style.opacity = '0';
            setTimeout(() => card.style.opacity = '1', 50);
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }

  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('img-full');
  const closeBtn = document.querySelector('.close-modal');
  
  const thumbnails = document.querySelectorAll('.project-thumbnail-container');

  thumbnails.forEach(thumbContainer => {
    thumbContainer.addEventListener('click', function() {
      const img = this.querySelector('img'); 
      
      if (img) {
        modal.style.display = "block";
        modalImg.src = img.src; 
        modalImg.alt = img.alt;
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});