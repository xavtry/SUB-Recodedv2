export function sanitizeURL(url) {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.href;
  } catch {
    alert('Invalid URL');
    return '';
  }
}
