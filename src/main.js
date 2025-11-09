import { setupNavigation } from './navControls.js';
import { loadURL } from './iframeManager.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation(loadURL);
});
