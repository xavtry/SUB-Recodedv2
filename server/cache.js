const cache = new Map();

function cacheGet(url) {
  return cache.get(url);
}

function cacheSet(url, content) {
  cache.set(url, content);
}

module.exports = { cacheGet, cacheSet };
