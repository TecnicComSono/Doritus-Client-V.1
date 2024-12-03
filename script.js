/ ==UserScript==
// @name         DoritusClient
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Client do sala do futuro.
// @author       tecnic
// @match        https://saladofuturo.educacao.sp.gov.br/*
// @icon         https://doritus.mmrcoss.tech/assets/doritus.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // URLs das novas imagens
    const novaImagem1 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const novaImagem2 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f"; // Altere para o URL desejado

    // Seletores das imagens
    const seletorImagem1 = "#root > div.MuiBox-root.css-z0hhne > div.MuiDrawer-root.MuiDrawer-docked.css-em35d7 > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div.MuiBox-root.css-1j0h67t > img";
    const seletorImagem2 = "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.css-o37zhb > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-3.css-ja4s3e > img";

    // Função para alterar uma imagem com base no seletor e URL
    function alterarImagem(seletor, novaSrc) {
        const imagem = document.querySelector(seletor);
        if (imagem) {
            imagem.src = novaSrc;
        }
    }

    // Função principal para substituir as imagens
    function substituirImagens() {
        alterarImagem(seletorImagem1, novaImagem1);
        alterarImagem(seletorImagem2, novaImagem2);
    }

    // Observador para mudanças no DOM
    const observer = new MutationObserver(() => {
        substituirImagens();
    });

    // Observa mudanças no corpo da página
    observer.observe(document.body, { childList: true, subtree: true });

    // Também tenta alterar as imagens ao carregar a página
    window.addEventListener('load', substituirImagens);
})();
