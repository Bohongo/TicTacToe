const puppeteer = require('puppeteer');
const APP = "https://bohongo.herokuapp.com/";


describe("puppeteer tests", () => {
    let page;
    let browser;

    jest.setTimeout(15000);

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 80
        });
        page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    });

    test("Press the resetScores button", async () => {
        const response = await page.goto("https://bohongo.herokuapp.com/", {
            "waitUntil": "networkidle0"
        });
        await page.click('#resetScores');
        await page.waitFor(1000);
    });

    test("Press the resetGame button", async () => {
        const response = await page.goto("https://bohongo.herokuapp.com/", {
            "waitUntil": "networkidle0"
        });
        await page.click('#resetGame');
        await page.waitFor(1000);
    });

});