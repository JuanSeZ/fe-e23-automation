import {expect} from "@playwright/test";

class Homepage {

    constructor(page)
    {
        this.page = page;
    }

    async verSliderCount(count) {
        const sliders = await this.page.locator('.n2-ss-slide').count();
        expect(sliders).toBe(count);
    }
}

module.exports = { Homepage };