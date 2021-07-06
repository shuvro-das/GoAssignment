const puppeteer = require("puppeteer");
const suburl = (medium) => `https://medium.com/tag/${medium}/latest`;

const pdfCreate = {
  browser: null,
  pages: null,

  pdfGen: async (medium) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(suburl(medium), { timeout: 0 });

    await page.pdf({ path: "hn.pdf", format: "a4" });

    await browser.close();
  },
};

module.exports = pdfCreate;
