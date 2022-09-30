const pup = require('puppeteer');

const url = "https://dicionariocriativo.com.br/";
const searchWord = "comida";

(async () => {
    const browser = await pup.launch({ headless: false }); //inicializa o nosso navegador, headless desabilita o funcionamento oculto.
    const page = await browser.newPage(); // nova página
    console.log("inicial");

    await page.goto(url); //goto chama nossa url
    console.log("fui para url");

    await page.waitForSelector('#palavra') // esperar atribuir palavra em pesquisa

    await page.type('#palavra', searchWord) //Define nosso id e recupera a palavra definida

    await Promise.all([
        page.waitForNavigation(),
        page.click('.icon-search')
    ])

    await page.waitForTimeout(5000) // esperar 05 segundo para fechar

    await browser.close(); //fechar navegador
})();