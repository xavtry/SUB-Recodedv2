import { sanitizeURL } from './sanitizer.js';
import { sendToProxy } from './proxyClient.js';

export function loadURL(rawURL) {
  const iframe = document.getElementById('browserFrame');
  const cleanURL = sanitizeURL(rawURL);
  const proxiedURL = sendToProxy(cleanURL);
  iframe.src = proxiedURL;
}
