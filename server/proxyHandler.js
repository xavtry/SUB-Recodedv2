const fetch = require('node-fetch');
const { rewriteHTML } = require('./urlRewriter');
const { setCORSHeaders } = require('./corsHeaders');
const { cacheGet, cacheSet } = require('./cache');

async function handleProxy(req, res) {
  const targetURL = req.query.url;
  if (!targetURL) return res.status(400).send('Missing URL');

  setCORSHeaders(res);

  const cached = cacheGet(targetURL);
  if (cached) return res.send(cached);

  try {
    const response = await fetch(targetURL);
    let content = await response.text();
    content = rewriteHTML(content, targetURL);
    cacheSet(targetURL, content);
    res.send(content);
  } catch (err) {
    res.status(500).send('Proxy error');
  }
}

module.exports = { handleProxy };
