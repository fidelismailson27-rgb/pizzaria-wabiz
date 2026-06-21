const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'https://pizzaria-wabiz.vercel.app';

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();

  page.on('console', async (msg) => {
    const values = await Promise.all(
      msg.args().map(async (arg) => {
        try { return await arg.jsonValue(); } catch { return arg.toString(); }
      })
    );
    console.log('[CONSOLE]', msg.type(), msg.text(), values);
  });

  page.on('pageerror', (err) => {
    console.log('[PAGE ERROR]', err.message);
    console.log(err.stack);
  });

  page.on('requestfailed', (req) => {
    console.log('[REQUEST FAILED]', req.url(), req.failure()?.errorText);
  });

  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('[STATUS]', response?.status(), response?.url());

  await page.waitForTimeout(7000);

  const info = await page.evaluate(() => ({
    title: document.title,
    bodyTextLength: document.body.innerText.length,
    bodyHtmlLength: document.body.innerHTML.length,
    bodyDisplay: getComputedStyle(document.body).display,
    bodyVisibility: getComputedStyle(document.body).visibility,
    bodyOpacity: getComputedStyle(document.body).opacity,
    mainExists: !!document.querySelector('main'),
    mainText: document.querySelector('main')?.innerText?.slice(0, 300) || null,
    scripts: [...document.scripts].map(s => s.src || '[inline]').slice(0, 20),
  }));

  console.log('[PAGE INFO]', JSON.stringify(info, null, 2));

  await page.screenshot({ path: 'debug.png', fullPage: true });
  console.log('[SCREENSHOT] debug.png');

  await browser.close();
})();
