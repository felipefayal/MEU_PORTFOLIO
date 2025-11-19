document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length > 0) {
    function handleTabClick(event) {
      const targetTabId = event.currentTarget.getAttribute('data-tab');
      const targetTabContent = document.getElementById(targetTabId);

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      event.currentTarget.classList.add('active');
      if (targetTabContent) {
        targetTabContent.classList.add('active');
      }
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });
  }
});