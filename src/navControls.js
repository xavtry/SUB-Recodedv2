export function setupNavigation(loadURL) {
  const urlInput = document.getElementById('urlInput');
  const goBtn = document.getElementById('goBtn');
  const backBtn = document.getElementById('backBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  const reloadBtn = document.getElementById('reloadBtn');

  goBtn.onclick = () => loadURL(urlInput.value);
  backBtn.onclick = () => history.back();
  forwardBtn.onclick = () => history.forward();
  reloadBtn.onclick = () => location.reload();
}
