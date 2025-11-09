const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('.'));

app.get('/proxy', async (req, res) => {
  const targetURL = req.query.url;
  if (!targetURL) return res.status(400).send('Missing URL');

  try {
    const response = await fetch(targetURL);
    const content = await response.text();
    res.send(content);
  } catch (err) {
    res.status(500).send('Proxy error');
  }
});

app.listen(PORT, () => {
  console.log(`SUB Recoded proxy running at http://localhost:${PORT}`);
});
