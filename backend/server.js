const express = require('express');
const path = require('path');
const cors = require('cors');
const pkg = require('body-parser');
const scrapeWebsite = require('./scraping');
const app = express();
const port = 3000;

const { urlencoded } = pkg;
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join('frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join('frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/web-scrapper', async (req, res) => {
  const {url} = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Must pass some url to get report.' });
  }

  try {
    const data = await scrapeWebsite(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get report. Please try later.' });
  }
})