const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testData.json")));

let poManager;
let topNav;
let myAccount;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    topNav = poManager.getTopNav();
    myAccount = poManager.getMyAccount();

    await page.goto(dataset.home.url, { viewport: null });
    expect(page).toHaveTitle(dataset.home.title);
});

test('Registration with invalid Email-id', async () => {
    await test.step('Click on My Account Menu', async () => {
        await topNav.clickMyAccountButton();
        await myAccount.verLoginheader();
    })
    await test.step('Enter invalid Email Address in Email-Address textbox', async () => {
        await myAccount.fillRegisterEmail("invalid email");
    });
    await test.step('Enter password in password textbox', async () => {
        await myAccount.fillRegisterPassword(dataset.user1.password);
    });
    await test.step('Click on Register button', async () => {
        await myAccount.clickLoginButton();
    });
    await test.step('Error banner is shown', async () => {
        await myAccount.isErrorDisplayed();
    });
})