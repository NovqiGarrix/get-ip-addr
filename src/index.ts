import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin())

async function getIpAddr(): Promise<string | undefined> {

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: true
    })

    const page = (await browser.pages())[0]

    try {

        await page.setRequestInterception(true);
        page.on('request', (ev) => {
            if (ev.resourceType() === 'image') {
                ev.abort()
            } else {
                ev.continue()
            }
        })

        await page.goto('https://wtfismyip.com/', { waitUntil: 'domcontentloaded' });

        const ipAdd = await page.evaluate(() => {
            return (document.querySelectorAll('center')[3] as any).innerText
        })
        if (!ipAdd) {
            console.error("Can't get IP Address: Element not found!");
            return
        }

        browser.close();
        return ipAdd

    } catch (error: any) {
        await browser.close();
        console.log(error.message);
    }

}

export default getIpAddr