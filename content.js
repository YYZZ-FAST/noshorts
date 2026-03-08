// minimal script: hide only shorts elements themselves with CSS

// inject hiding stylesheet
(function() {
  const style = document.createElement('style');
  style.textContent = `.noshorts { display: none !important; }`;
  if (document.head) document.head.appendChild(style);
  else document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
})();

function hideShorts() {
  document.querySelectorAll('ytd-reel-shelf-renderer, a[href^="/shorts/"]').forEach(el => {
    el.classList.add('noshorts');
  });
}

// initial run and observe for new nodes
if (document.body) {
  hideShorts();
  new MutationObserver(hideShorts).observe(document.body, { childList: true, subtree: true });
} else {
  document.addEventListener('DOMContentLoaded', () => {
    hideShorts();
    new MutationObserver(hideShorts).observe(document.body, { childList: true, subtree: true });
  });
}