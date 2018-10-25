const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices["iPhone X"];

describe("Google screenshots", () => {
  let browser, page;
  let url = "file:///Users/elias/Desktop/TicTacToe/src/client/index.html";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Save a desktop screenshot", async () => {
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);
    await page.screenshot({path: './desktop-screenshot.png', type: 'png'});
    // Grab a screenshot and save it as "desktop-screenshot.png"
  });
});
