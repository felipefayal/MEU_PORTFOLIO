(function() {

  const isGitHubPages = window.location.hostname.includes('github.io');
  const repositoryName = window.location.pathname.split('/')[1];
  const basePath = isGitHubPages ? `/${repositoryName}/` : '/';
  const baseTag = `<base href="${basePath}">`;

  document.head.insertAdjacentHTML('afterbegin', baseTag);
})();