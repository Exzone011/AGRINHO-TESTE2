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

    // Pegue o botão
    var mybutton = document.getElementById("backToTopBtn");

    // Quando o usuário rolar para baixo 20px do topo do documento, mostre o botão
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Quando o usuário clicar no botão, role para o topo do documento
    function topFunction() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
    }
