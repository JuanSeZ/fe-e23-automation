const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let shop;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    shop = poManager.getShop();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Shop-Filter By Price Functionality',async () => {
    await test.step('Click on Shop Menu', async () => {
        await topNav.clickShopButton();
    })
    await test.step('Filter by price between 150 to 450 rps', async () => {
        await shop.filterByPrice('150','450');
    });
    await test.step('Verify books are displayed between 150 to 450 rps', async () => {
        await shop.verPriceRange(150,450);
    });
})

