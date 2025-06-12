const preloadCursor = () => {
  const img = new Image();
  img.src = 'Images/cursor.png';
  document.body.style.cursor = `url(${img.src}), pointer`; // Apply globally
};
window.addEventListener('load', preloadCursor);

document.addEventListener('selectionchange', () => {
  if (window.getSelection().toString().length > 0) {
    document.body.style.cursor = 'url("Images/text-select.png"), text';
  } else {
    document.body.style.cursor = 'url("Images/cursor.png"), auto';
  }
});