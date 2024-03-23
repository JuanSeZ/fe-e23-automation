const { TopNav } = require('./topNav');
const { MyAccount } = require('./myAccount');
const { Shop } = require('./shop');
const { Homepage } = require('./homepage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.topNav = new TopNav(this.page);
        this.myAccount = new MyAccount(this.page);
        this.shop = new Shop(this.page);
        this.homePage = new Homepage(this.page);
    }


    getTopNav()
    {
        return this.topNav;
    }

    getMyAccount()
    {
        return this.myAccount;
    }

    getShop()
    {
        return this.shop;
    }

    getHomePage()
    {
        return this.homePage;
    }
   
}
module.exports = { POManager };