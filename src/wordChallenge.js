const pup = require('puppeteer');
const { publishMessage } = require('./publishMessage')
const readlineSync = require('readline-sync');
require('dotenv/config');

const url = process.env.url;

async function word() {
    const searchWord = readlineSync.question("Informe uma palavra: ")

    const browser = await pup.launch({ headless: true }); //inicializa o nosso navegador, headless desabilita o funcionamento oculto.
    const page = await browser.newPage(); // nova página

    await page.goto(url); //goto chama nossa url

    await page.waitForSelector('#palavra') // esperar atribuir palavra em pesquisa

    await page.type('#palavra', searchWord) //Define nosso id e recupera a palavra definida

    await Promise.all([
        page.waitForNavigation(),
        page.click('.icon-search')
    ])

    const significado = await page.evaluate(() => {
        const el = document.querySelectorAll('#significado > .resumoBoxContent')
        for (const newElement of el) {
            return newElement.innerText;
        }
    });

    const sinonimos = await page.$$eval('.resumoBox > .resumoBoxContent > ul > li > .contentListWrapper > .contentListData > p > a', el => el.map(link => link.title))

    const analogico = await page.$$eval('#analogico > .resumoBoxContent > .tags > li > a', el => el.map(link => link.title))

    const expressoes = await page.$$eval('#expressoes > .resumoBoxContent > .resumoWrapper > ul > li > .contentListWrapper > .contentListData > h3', el => el.map(link => link.title))

    const citacoes = await page.evaluate(() => {
        const el = document.querySelectorAll('#citacoes > .resumoBoxContent > .resumoWrapper')
        for (const newElement of el) {
            return newElement.innerText;
        }
    });

    await browser.close();

    return publishMessage(JSON.stringify({ significado: significado, sinonimos: sinonimos, analogico: analogico, expressoes: expressoes, citacoes: citacoes }))

};

module.exports = word()