function removeShorts() {
  document.querySelectorAll('ytd-reel-shelf-renderer, a[href^="/shorts/"]').forEach(el => el.remove());
}

removeShorts();

const observer = new MutationObserver(removeShorts);
observer.observe(document.body, { childList: true, subtree: true });