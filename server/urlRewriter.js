function rewriteHTML(html, baseURL) {
  return html.replace(/(href|src)="(.*?)"/g, (match, attr, url) => {
    if (url.startsWith('http') || url.startsWith('//')) {
      return `${attr}="/proxy?url=${encodeURIComponent(url)}"`;
    }
    const absolute = new URL(url, baseURL).href;
    return `${attr}="/proxy?url=${encodeURIComponent(absolute)}"`;
  });
}

module.exports = { rewriteHTML };
