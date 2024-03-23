const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../test-data/testdata.json")));

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

test('My Accounts-Dashboard', async () => {
    await test.step('Click on My Account Menu', async () => {
        await topNav.clickMyAccountButton();
        await myAccount.verLoginheader();
    })
    await test.step('Enter registered username in username textbox', async () => {
        await myAccount.fillUserName(dataset.user1.username);
    });
    await test.step('Enter password in password textbox', async () => {
        await myAccount.fillPassInput(dataset.user1.password);
    });
    await test.step('Click on login button', async () => {
        await myAccount.clickLoginButton();
    });
    await test.step('User must successfully login to the web page', async () => {
        await myAccount.verUsername(dataset.user1.username);
    });
    await test.step('Click on Myaccount link which leads to Dashboard', async () => {
        await myAccount.clickMyAccount();
    });
    await test.step('User must view Dashboard of the site', async () => {
        await myAccount.verDashboard();
    });
})
