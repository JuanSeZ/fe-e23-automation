const { expect } = require('@playwright/test');

class MyAccount
{
    constructor(page)
    {
        //locators
        this.page = page;
        this.loginH = page.locator('//h2[text()="Login"]');
        this.loginUserNameInput = page.locator('#username');
        this.loginPassInput = page.locator('#password');
        this.loginButton = page.locator('input[name="login"]');
        this.usernameSignIn = page.locator('//p/strong');
        this.registerEmailInput = page.locator('#reg_email');
        this.registerPasswordInput = page.locator('#reg_password');
        this.myAccountButton = page.locator('//*[@id="menu-item-50"]/a');
    }

    async verLoginheader()
    {
        expect(this.loginH).toBeVisible;
    }

    async fillUserName(username)
    {
        await this.loginUserNameInput.type(username)
    }
    
    async fillPassInput(password)
    {
        await this.loginPassInput.type(password);
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    async verUsername(username)
    {
        await expect(this.usernameSignIn).toHaveText(username);
    }

    async isErrorDisplayed()
    {
        await expect(this.page.locator('.woocommerce-error')).toBeVisible();
    }

    async fillRegisterEmail(email) {
        await this.registerEmailInput.type(email)
    }

    async fillRegisterPassword(password) {
        await this.registerPasswordInput.type(password);
    }

    async clickMyAccount()
    {
        await this.myAccountButton.click();
    }

    async verDashboard()
    {
        await expect(this.page.locator('//*[@id="page-36"]/div/div[1]/nav/ul/li[1]/a')).toHaveText('Dashboard');
    }

}
module.exports = { MyAccount };