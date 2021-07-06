const puppeteer = require("puppeteer");
const suburl = (medium) => `https://medium.com/tag/${medium}/latest`;
// const mediumDB = require("./Database/DbSchema.js");
// const mongoose = require("mongoose");
const self = {
  browser: null,
  pages: null,

  initialize: async (medium) => {
    // going to the actual page
    // await self.page.goto(suburl(medium), { waitUntil: "networkidle0" });

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(suburl(medium), { timeout: 0 });

    let results = [];

    let creatorname = await page.evaluate(() =>
      Array.from(document.querySelectorAll("div.l h4.ay")).map((partner) =>
        partner.innerText.trim()
      )
    );
    let creator = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          "#root > div > div > div > div > div.l > div:nth-child(2) > div.l > div.ae"
        )
      ).map((partner) => partner.innerText.trim())
    );
    console.log(creator);
    let titlename = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h2")).map((partner) =>
        partner.innerText.trim()
      )
    );

    let detailsPosted = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(".ay.b.dj.ei.ez.fa.fb.fc.fd.fe.ff.dm")
      ).map((partner) => partner.innerText.trim())
    );
    let detailsReading = await page.evaluate(() =>
      Array.from(document.querySelectorAll("span.ay.b.dj.ei.dm")).map(
        (partner) => partner.innerText.trim()
      )
    );
    let yourHref = await page.evaluate(() =>
      Array.from(document.querySelectorAll("div.l > a[href]"), (a) =>
        a.getAttribute("href")
      )
    );

    const allPosts = document.querySelectorAll(
      "#root > div > div > div > div > div.l > div:nth-child(2) > div.l > div.ae"
    );
    const latestNPosts = [...allPosts].slice(0, n);
    console.log(latestNPosts);

    results.push({
      creatorname,
      titlename,
      yourHref,
      detailsReading,
      detailsPosted,
    });

    console.log(creatorname);
    console.log(titlename);
    console.log(yourHref);
    console.log(detailsPosted);
    console.log(detailsReading);

    console.log(results);

    var result1 = new mediumDB({
      creatorName: creatorname,
      title: titlename,
      detailPosted: detailsPosted,
      detailReading: detailsReading,
      linkArray: yourHref,
    });
    await result1.save();
    await browser.close();
    console.log(results);
    return results;
  },
};

module.exports = self;

// // const puppeteer = require("puppeteer");
// // const suburl = (medium) => `https://medium.com/tag/${medium}/latest`;
// // // const mediumDB = require("./Database/DbSchema.js");
// // // const mongoose = require("mongoose");
// // const self = {
// //   browser: null,
// //   pages: null,

// //   initialize: async (medium) => {
// //     const browser = await puppeteer.launch({ headless: false });
// //     const page = await browser.newPage();

// //     await page.goto(suburl(medium), { timeout: 0 });

// //     let urls = await page.evaluate(() => {
// //       var n = 10;
// //       const allPosts = document.querySelectorAll(
// //         "#root > div > div > div > div > div.l > div:nth-child(2) > div.l > div.ae"
// //       );
// //       const latestNPosts = [...allPosts].slice(0, n);
// //       latestNPosts.map((el) => {
// //         const details = {};
// //         details.creator = el.querySelector("div > div > div h4").textContent;
// //         details.title = el.querySelector("div > div > div h2").textContent;
// //         details.url = el.querySelector("div > div > div:nth-child(2) > a").href;
// //         return details;
// //       });
// //     });
// //     browser.close();
// //     console.log(details);
// //     return resolve(urls);
// //   },
// // };

// // module.exports = self;
