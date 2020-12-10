const { chromium, devices } = require('playwright');
var static = require('node-static');
const { exit } = require('process');

var fileServer = new static.Server();

const pixel2 = devices['Pixel 2'];


require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        fileServer.serve(request, response);
        
    }).resume();
}).listen(8080);


const goAndDo = async (context, suffix)=>{
    const page = await context.newPage();
    await page.goto("http://localhost:8080/index.html")
    await page.screenshot({path: `screenshot_${suffix}.png`});
}

(async ()=>{
    const browser = await chromium.launch();

    const context = await browser.newContext({
        viewport: { width: 3440, height: 1440 }
    });
    await goAndDo(context, "3440");
    
    const pixelContext = await browser.newContext({
        ...pixel2,
    });
    await goAndDo(pixelContext, "pixel");
    
    const context1920 = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    await goAndDo(context1920, "1920");

    
    await browser.close();
    exit();
    
})()



