// Variável para o carrossel
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// Variáveis para o botão "Voltar ao Topo"
const backToTopBtn = document.getElementById("backToTopBtn");

// Função para mostrar/ocultar o botão com base na rolagem
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Função para rolar ao topo do documento
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

// Adiciona o evento de rolagem
window.onscroll = function() {
    scrollFunction();
};

// Adiciona o evento de clique para o botão "Voltar ao Topo"
backToTopBtn.addEventListener('click', topFunction);

