import {expect} from "@playwright/test";

class Shop {

    constructor(page)
    {
        this.page = page;
    }

    async filterByPrice(min, max)
    {
        await this.page.locator('#min_price').type(min);
        await this.page.locator('#max_price').type(max);
        await this.page.locator('//*[@id="woocommerce_price_filter-2"]/form/div/div[2]/button').click();
    }

    async verPriceRange(min, max)
    {
        // NOTE: I couldn't find a better way to get the price list, any suggestions are welcome
        const prices = await this.page.locator('/html/body/div[1]/div[2]/div/div/ul');
        const priceList = await prices.locator('li');
        for(let i=0; i<priceList.length; i++)
        {
            const price = await priceList[i].locator('.price').innerText();
            const priceVal = price.replace('₹','');
            expect(parseInt(priceVal)).toBeGreaterThanOrEqual(min);
            expect(parseInt(priceVal)).toBeLessThanOrEqual(max);
        }
    }

}

module.exports = { Shop };