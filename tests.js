const { chromium } = require('playwright');

(async ()=>{
    const browser = await chromium.launch({headless:false});

    const context = await browser.newContext({
        viewport: { width: 2560, height: 1440 }
    });
    const page = await context.newPage();
    await page.goto("index.html")
    await page.screenshot({path: `screenshot_2560.png`});

})()


