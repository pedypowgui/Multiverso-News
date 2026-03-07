const elemSlides = document.querySelector(".slides");
const elemsImagem = document.querySelectorAll(".slides img");
const elemBotaoEsquerdo = document.querySelector(".botaoVoltar");
const elemBotaoDireito = document.querySelector(".botaoProximo");

let index = 0;
let movimento = -25.25;

// Botão esquerdo
elemBotaoEsquerdo.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = elemsImagem.length -1;
    }
    atualizarCarrossel();
});

// Botão direito
elemBotaoDireito.addEventListener("click", () => {
    index++;

    if(index == elemsImagem.length){
        index = 0;
    }
    atualizarCarrossel();
});

const atualizarCarrossel = () => {
    elemSlides.style.transform = `translateX(${index * movimento}%)`;
};

setInterval(() => {
    index++;
    if(index == elemsImagem.length){
        index = 0;
    }
    atualizarCarrossel();
}, 3000);