import { goBack, goForward, getCurrentURL, saveSession } from './sessionManager.js';
import { loadURL } from './iframeManager.js';
import { updateAddressBar } from './uiRenderer.js';

export function bindEvents() {
  document.getElementById('backBtn').onclick = () => {
    const url = goBack();
    if (url) {
      loadURL(url);
      updateAddressBar(url);
    }
  };

  document.getElementById('forwardBtn').onclick = () => {
    const url = goForward();
    if (url) {
      loadURL(url);
      updateAddressBar(url);
    }
  };

  document.getElementById('reloadBtn').onclick = () => {
    const url = getCurrentURL();
    if (url) loadURL(url);
  };

  document.getElementById('goBtn').onclick = () => {
    const url = document.getElementById('urlInput').value;
    saveSession(url);
    loadURL(url);
  };
}
