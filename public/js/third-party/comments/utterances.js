/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;
  console.log('test???');

  NexT.utils.loadComments('.utterances-container')
    .then(() => {
      console.log('test')
      return NexT.utils.getScript('https://utteranc.es/client.js', {
        attributes: {
          async       : true,
          crossOrigin : 'anonymous',
          'repo'      : CONFIG.utterances.repo,
          'issue-term': CONFIG.utterances.issue_term,
          'theme'     : CONFIG.utterances.theme
        },
        parentNode: document.querySelector('.utterances-container')
      })
    });
});

document.addEventListener('pjax:send', () => {
  console.log('test???sss')

  if (window.dsqjs) window.dsqjs.destroy();
});
