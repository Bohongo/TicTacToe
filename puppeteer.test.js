//import puppeteer from 'puppeteer'
const puppeteer = require('puppeteer');
const APP = "https://bohongo.herokuapp.com/";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({
    width,
    height
  });
});


describe("reset score", () => {
  test("Press the resetScores button", async () => {
    await page.goto(APP, {
      "waitUntil": "networkidle0"
    });
    await page.click('#resetScores');
    await page.waitFor(1000);
  }, 20000);
});

describe("reset game", () => {
  test("Press the resetGame button", async () => {
    await page.goto(APP, {
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