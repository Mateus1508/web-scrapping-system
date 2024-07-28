const puppeteer = require('puppeteer');

async function scrapeWebsite(url) {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();
  
  await page.goto(url,{ waitUntil: 'networkidle2' });

  const title = await page.title();

  const metaDescription = await page.evaluate(() =>
    document.querySelector('meta[name="description"]')?.content || ''
  );

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a')).map(a => a.href).filter(link => link)
  );

  const images = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img, [data-src], [srcset], picture img'))
    .map(img => img.src || img.dataset.src || img.srcset.split(',')[0].split(' ')[0])
    .filter(src => src)
  );

  

  await browser.close();

  const data = { title, metaDescription, links, images };
  
  return data;
}

module.exports = scrapeWebsite;
