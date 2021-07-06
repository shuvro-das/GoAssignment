const puppeteer = require("puppeteer");
const suburl = (medium) => `https://medium.com/tag/${medium}/latest`;
const mediumDB = require("./Database/DbSchema.js");
const mongoose = require("mongoose");
const self = {
  browser: null,
  pages: null,

  initialize: async (medium) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(suburl(medium), { timeout: 0 });
    await page.waitForSelector(
      "#root > div > div > div > div > div.l > div:nth-child(2) > div.l > div.ae"
    );

    let urls = await page.evaluate(() => {
      // var n = 10;
      const details = {};

      const allPosts = document.querySelectorAll(
        "#root > div > div > div > div > div.l > div:nth-child(2) > div.l > div.ae"
      );
      const latestNPosts = [...allPosts].slice(0, 10);
      latestNPosts.map(async (el) => {
        details.creator = await el.querySelector("div > div > div h4")
          .textContent;
        details.title = await el.querySelector("div > div > div h2 ")
          .textContent;
        details.datePosted = await el.querySelector("div > div > div p")
          .textContent;
        details.timePosted = await el.querySelector("div > div > div > span.ay")
          .textContent;

        details.url = await el.querySelector("div > div > div:nth-child(2) > a")
          .href;
      });
   
      console.log(details);

      return details;
    });
    browser.close();

    return urls;
  },
};

module.exports = self;
