const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let homepage;

// https://practice.automationtesting.in/test-cases/

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    homepage = poManager.getHomePage();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Home page with three Sliders only', async () => {
    await test.step('Click on Shop Menu', async () => {
        await topNav.clickShopButton();
    })
    await test.step('Click on Home Menu', async () => {
        await topNav.clickHomeButton();
    });
    await test.step('Verify only three sliders are displayed', async () => {
        await homepage.verSliderCount(3);
    });
})

