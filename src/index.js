const pup = require('puppeteer');

const url = "https://dicionariocriativo.com.br/";
const searchWord = "comida";

(async () => {
    const browser = await pup.launch({ headless: false }); //inicializa o nosso navegador, headless desabilita o funcionamento oculto.
})();