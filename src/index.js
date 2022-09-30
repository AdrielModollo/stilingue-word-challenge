const pup = require('puppeteer');

const url = "https://dicionariocriativo.com.br/";
const searchWord = "comida";

(async () => {
    const browser = await pup.launch({ headless: false }); //inicializa o nosso navegador, headless desabilita o funcionamento oculto.
    const page = await browser.newPage(); // nova página
    console.log("inicial");
    await page.goto(url); //goto chama nossa url
    console.log("fui para url");
    await browser.close(); //fechar navegador
})();