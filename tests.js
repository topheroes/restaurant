const { chromium } = require('playwright');
var static = require('node-static');
const { exit } = require('process');

var fileServer = new static.Server();

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        fileServer.serve(request, response);
        
    }).resume();
}).listen(8080);

(async ()=>{
    const browser = await chromium.launch();

    const context = await browser.newContext({
        viewport: { width: 3440, height: 1440 }
    });
    const page = await context.newPage();
    await page.goto("http://localhost:8080/index.html")
    await page.screenshot({path: `screenshot_3440.png`});
    await browser.close();
    exit();
    
})()



