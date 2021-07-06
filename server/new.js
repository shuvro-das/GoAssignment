// const puppeteer = require("puppeteer");

// (async (event) => {
//   const key_words = "JavaScript";
//   const link = "https://www.google.com";

//   const browser = await puppeteer.launch({
//     headless: true,
//     slowMo: 100,
//     devtools: true,
//   });

//   try {
//     const page = await browser.newPage();

//     await page.setViewport({ width: 1199, height: 900 });

//     await page.goto(link);

//     await page.waitForSelector("div form div:nth-child(2) input");
//     await page.click("div form div:nth-child(2) input");
//     await page.keyboard.type(key_words);
//     await page.keyboard.press("Enter");

//     await page.waitFor(3000);

//     await page.waitForSelector(
//       "#main > div #center_col #search > div > div > div"
//     );
//     const url = await getHref(
//       page,
//       `#main > div #center_col #search > div > div > div a`
//     );

//     await page.goto(url, { waitUntil: "domcontentloaded" });

//     await page.screenshot({
//       fullPage: true,
//       path: "new_image.png",
//     });
//     const screenshotPath = process.cwd() + "/new_image.png";

//     console.log("URL of the page:", url);
//     console.log("Location of the screenshot:", screenshotPath);

//     await page.close();
//     await browser.close();
//   } catch (error) {
//     console.log(error);
//     await browser.close();
//   }
// })();

// const getHref = (page, selector) =>
//   page.evaluate(
//     (selector) => document.querySelector(selector).getAttribute("href"),
//     selector
//   );

const pupeteer = require("puppeteer");

const scrapeImages = async () => {
  const browser = await pupeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.waitFor(5000);

  await page.goto("https://medium.com/tag/cooking");

  // await page.waitForSelector("img", { visible: true });

  const data = await page.evaluate(() => {
    const images = document.querySelectorAll("div.ae.hb");
    const urls = Array.from(images).map((v) => v.src);

    return urls;
  });
  await browser.close();
  console.log(data);
  return data;
};

scrapeImages();
