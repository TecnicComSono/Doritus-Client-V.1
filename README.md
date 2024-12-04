# 🍂 Platform Destroyer Doritus CMSP Client
### Customize your CMSP platforms with a simple code.

```js
// ==UserScript==
// @name         DoritusClient
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Doritus Client da sala do futuro
// @author       tecniccomsono
// @match        https://saladofuturo.educacao.sp.gov.br/*
// @icon         https://doritus.mmrcoss.tech/assets/doritus.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const novaImagem1 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const novaImagem2 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const novaImagem3 = "https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f";
    const seletorImagem1 = "#root > div.MuiBox-root.css-z0hhne > div.MuiDrawer-root.MuiDrawer-docked.css-em35d7 > div > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div.MuiBox-root.css-1j0h67t > img";
    const seletorImagem2 = "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-1.css-o37zhb > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-3.css-ja4s3e > img";
    const seletorImagem3 = "#root > div.MuiBox-root.css-z0hhne > div.MuiBox-root.css-a60g7b > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div.css-gsuwte > div > div > div.css-gsuwte > div > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-spacing-xs-1.MuiGrid-grid-xs-12.css-1k7k5az > div:nth-child(1)"
    function alterarImagem(seletor, novaSrc) {
        const imagem = document.querySelector(seletor);
        if (imagem) {
            imagem.src = novaSrc;
        }
    }
    function substituirImagens() {
        alterarImagem(seletorImagem1, novaImagem1);
        alterarImagem(seletorImagem2, novaImagem2);
        alterarImagem(seletorImagem3, novaImagem3);
    }
    const observer = new MutationObserver(() => {
        substituirImagens();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('load', substituirImagens);
// da load no darkread e também configura
    function loadDarkReader() {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js";
        script.onload = () => {
            DarkReader.setFetchMethod(window.fetch);
            DarkReader.enable({
                brightness: 125,
                contrast: 105,
                sepia: 0,
                grayscale: 0,
            });
        };
        document.head.appendChild(script);
    }

// da load na function do darkreader
    loadDarkReader();
    console.log("thanks marcos dez pece por me ensinar a fazer dark reader")
})();

// a seguir o oneko do site do marcos

(function() {
    'use strict';

    const GIF_URL = "https://doritus.mmrcoss.tech/assets/js/oneko.gif";

    (function oneko() {
        const nekoEl = document.createElement("div");
        let nekoPosX = 32;
        let nekoPosY = 32;
        let mousePosX = 0;
        let mousePosY = 0;
        let frameCount = 0;
        let idleTime = 0;
        let idleAnimation = null;
        let idleAnimationFrame = 0;
        const nekoSpeed = 10;
        const spriteSets = {
            idle: [[-3, -3]],
            alert: [[-7, -3]],
            scratch: [
                [-5, 0],
                [-6, 0],
                [-7, 0],
            ],
            tired: [[-3, -2]],
            sleeping: [
                [-2, 0],
                [-2, -1],
            ],
            N: [
                [-1, -2],
                [-1, -3],
            ],
            NE: [
                [0, -2],
                [0, -3],
            ],
            E: [
                [-3, 0],
                [-3, -1],
            ],
            SE: [
                [-5, -1],
                [-5, -2],
            ],
            S: [
                [-6, -3],
                [-7, -2],
            ],
            SW: [
                [-5, -3],
                [-6, -1],
            ],
            W: [
                [-4, -2],
                [-4, -3],
            ],
            NW: [
                [-1, 0],
                [-1, -1],
            ],
        };
        function create() {
            nekoEl.id = "oneko";
            nekoEl.style.width = "32px";
            nekoEl.style.height = "32px";
            nekoEl.style.position = "fixed";
            nekoEl.style.zIndex = "999999"; // Garante que esteja acima de todos os elementos.
            nekoEl.style.backgroundImage = `url('${GIF_URL}')`;
            nekoEl.style.imageRendering = "pixelated";
            nekoEl.style.left = "16px";
            nekoEl.style.top = "16px";

            document.body.appendChild(nekoEl);

            document.onmousemove = (event) => {
                mousePosX = event.clientX;
                mousePosY = event.clientY;
            };

            window.onekoInterval = setInterval(frame, 100);
        }

        function setSprite(name, frame) {
            const sprite = spriteSets[name][frame % spriteSets[name].length];
            nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
                sprite[1] * 32
            }px`;
        }

        function resetIdleAnimation() {
            idleAnimation = null;
            idleAnimationFrame = 0;
        }

        function idle() {
            idleTime += 1;

            if (
                idleTime > 10 &&
                Math.floor(Math.random() * 200) === 0 &&
                idleAnimation == null
            ) {
                idleAnimation = ["sleeping", "scratch"][
                    Math.floor(Math.random() * 2)
                ];
            }

            switch (idleAnimation) {
                case "sleeping":
                    if (idleAnimationFrame < 8) {
                        setSprite("tired", 0);
                        break;
                    }
                    setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                    if (idleAnimationFrame > 192) {
                        resetIdleAnimation();
                    }
                    break;
                case "scratch":
                    setSprite("scratch", idleAnimationFrame);
                    if (idleAnimationFrame > 9) {
                        resetIdleAnimation();
                    }
                    break;
                default:
                    setSprite("idle", 0);
                    return;
            }
            idleAnimationFrame += 1;
        }

        function frame() {
            frameCount += 1;
            const diffX = nekoPosX - mousePosX;
            const diffY = nekoPosY - mousePosY;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance < 48) {
                idle();
                return;
            }

            idleAnimation = null;
            idleAnimationFrame = 0;

            if (idleTime > 1) {
                setSprite("alert", 0);
                idleTime = Math.min(idleTime, 7);
                idleTime -= 1;
                return;
            }

            let direction = diffY / distance > 0.5 ? "N" : "";
            direction += diffY / distance < -0.5 ? "S" : "";
            direction += diffX / distance > 0.5 ? "W" : "";
            direction += diffX / distance < -0.5 ? "E" : "";
            setSprite(direction, frameCount);

            nekoPosX -= (diffX / distance) * nekoSpeed;
            nekoPosY -= (diffY / distance) * nekoSpeed;

            nekoEl.style.left = `${nekoPosX - 16}px`;
            nekoEl.style.top = `${nekoPosY - 16}px`;
        }

        create();
    })();
})();

console.log("Oneko cat loaded by marcos10pc")

function mostrarNotificacao() {
    if (document.querySelector("#notificacao-custom")) return;
    const notificacao = document.createElement("div");
    notificacao.id = "notificacao-custom";
    notificacao.style.position = "fixed";
    notificacao.style.top = "50%";
    notificacao.style.left = "50%";
    notificacao.style.transform = "translate(-50%, -50%)";
    notificacao.style.backgroundColor = "white";
    notificacao.style.color = "#333";
    notificacao.style.padding = "20px 30px";
    notificacao.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    notificacao.style.borderRadius = "12px";
    notificacao.style.textAlign = "center";
    notificacao.style.zIndex = "999999";
    notificacao.style.fontFamily = "'Arial', sans-serif";
    notificacao.style.maxWidth = "400px";
    notificacao.style.width = "90%";
    notificacao.style.border = "1px solid white";


    // Adiciona o botão de fechar
    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.color = "#999";
    closeButton.style.fontSize = "18px";
    closeButton.style.cursor = "pointer";
    closeButton.style.transition = "color 0.3s ease";
    closeButton.addEventListener("mouseenter", () => (closeButton.style.color = "#333"));
    closeButton.addEventListener("mouseleave", () => (closeButton.style.color = "#999"));
    closeButton.addEventListener("click", () => notificacao.remove());
    const titulo = document.createElement("h2");
    titulo.textContent = "Entre na Platform Destroyer";
    titulo.style.marginBottom = "10px";
    titulo.style.color = "white";
    titulo.style.fontSize = "20px";
    const texto = document.createElement("p");
    texto.innerHTML =
        'Você gosta de nossos scripts? Então entre agora para a <a href="https://discord.gg/platformdestroyer" target="_blank" style="color: #8800d1; text-decoration: none; font-weight: bold;">Platform Destroyer</a>!';
    texto.style.fontSize = "16px";
    texto.style.lineHeight = "1.6";
    const botao = document.createElement("button");
    botao.textContent = "Entrar Agora";
    botao.style.backgroundColor = "white";
    botao.style.color = "black";
    botao.style.border = "none";
    botao.style.padding = "10px 20px";
    botao.style.borderRadius = "8px";
    botao.style.cursor = "pointer";
    botao.style.marginTop = "15px";
    botao.style.fontSize = "16px";
    botao.style.transition = "background-color 0.3s ease";
    botao.style.border = "1px solid white";
    botao.addEventListener("click", () => {
        window.open("https://discord.gg/platformdestroyer", "_blank");
        notificacao.remove();
    });
    notificacao.appendChild(closeButton);
    notificacao.appendChild(titulo);
    notificacao.appendChild(texto);
    notificacao.appendChild(botao);
    document.body.appendChild(notificacao);
}
mostrarNotificacao();

```

By creating this repository, I grant everyone permission to use my code. However, do not use it for profit (this is a free tampermonkey code)

Thanks for looking at this.

---

<p align="center">
    <img src="https://cdn.discordapp.com/attachments/1312515287911895062/1313500661345947698/imagem_2024-12-03_104102205-removebg-preview.png?ex=67505c51&is=674f0ad1&hm=bd9dd1463faa4ebefbc1dcb11af3154fadeec47755025494a9629fa0538f785f" alt="DoritusLogo">
</p>
