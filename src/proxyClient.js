export function sendToProxy(url) {
  return `/proxy?url=${encodeURIComponent(url)}`;
}
