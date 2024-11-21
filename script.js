const all = document.querySelector('.all');
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * -100 + 'px';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    star.style.setProperty('--direction', Math.random() * 0.5 + 0.5);
    all.appendChild(star);

    setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 200);

const head = document.querySelector('#head');
const header = document.querySelector('header');
const projetos = document.querySelector('.projetos');

const sobre = document.querySelector('.sobre');

const voltar = document.querySelector('#voltar');

document.addEventListener('DOMContentLoaded', () => {
    const nome = "Benito Pinó Hitler Silvestre Marcelino";
    const nomeElemento = document.getElementById('nome');
    let indice = 0;

    function digitar() {
        if (indice < nome.length) {
            nomeElemento.textContent += nome.charAt(indice);
            indice++;
            setTimeout(digitar, 50);
        }
    }

    digitar();
});
head.addEventListener("click", ()=>{
    all.classList.add("indo");
    setTimeout(function() {
        projetos.style.display = "none";
        header.style.display = "none";
        header.style.display = "none";
        sobre.style.display = "flex";
    }, 490);
    setTimeout(function() {all.classList.remove("indo");}, 550);
})
voltar.addEventListener("click", ()=>{
    all.classList.add("voltar");
    setTimeout(function() {
        projetos.style.display = "flex";
        header.style.display = "flex";
        header.style.display = "flex";
        sobre.style.display = "none";
    }, 490);
    setTimeout(function() {all.classList.remove("voltar");}, 550);
})
