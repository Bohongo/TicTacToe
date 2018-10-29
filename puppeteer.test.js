const puppeteer = require('puppeteer');
const APP = "https://bohongo.herokuapp.com/";

let page;
let browser;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: true,
        slowMo: 0
    });
    page = await browser.newPage();
});
afterEach(async () => {
    await browser.close();
});


describe("reset score", () => {
    test("Press the resetScores button", async () => {
        const response = await page.goto("https://bohongo.herokuapp.com/", {
            "waitUntil": "networkidle0"
        });
        await page.click('#resetScores');
        await page.waitFor(1000);
    }, 20000);
});

describe("reset game", () => {
    test("Press the resetGame button", async () => {
        const response = await page.goto("https://bohongo.herokuapp.com/", {
            "waitUntil": "networkidle0"
        });
        await page.click('#resetGame');
        await page.waitFor(1000);
    }, 20000);
});
/*
describe("board test", () => {
  test("Press square 1 in board", async () => {
    await page.goto(APP, {
      "waitUntil": "networkidle0"
    });
    await page.click('1');
    await page.waitFor(1000);
  }, 20000);

});*/