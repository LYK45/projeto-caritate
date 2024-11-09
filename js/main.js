(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    //JS DOS NUMEROS DO PROJETO//
    $(document).ready(function() {
        // Função para animar os números
        function animateNumbers() {
            const numbers = document.querySelectorAll('.count');
            numbers.forEach((number) => {
                const countTo = parseInt(number.getAttribute('data-count'));
                let count = 0;
                const increment = Math.ceil(countTo / 20); // Define a velocidade da animação
    
                function updateNumber() {
                    count += increment;
                    if (count > countTo) count = countTo;
                    number.textContent = count;
    
                    if (count < countTo) {
                        requestAnimationFrame(updateNumber);
                    }
                }
                updateNumber();
            });
        }
    
        // Usando IntersectionObserver para detectar quando a seção de números estiver visível
        const numbersSection = document.querySelector('.container .row'); // Selecione o contêiner dos números
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers(); // Chama a função de animação quando a seção entra na tela
                    observer.unobserve(entry.target); // Para a observação depois que a animação começar
                }
            });
        }, {
            threshold: 0.9 // A animação começa quando 90% da seção estiver visível
        });
    
        observer.observe(numbersSection); // Começa a observar a seção de números
    });    


//BOTÃO DE VOLTA AO TOPO//
// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) { // Mostrar botão após 200px de rolagem
        $('.back-to-top').addClass('show'); // Adiciona a classe 'show'
    } else {
        $('.back-to-top').removeClass('show'); // Remove a classe 'show'
    }
});

// Fazer o scroll suave até o topo quando o botão for clicado
$('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 50); // 50ms para o scroll suave
    return false; // Evita o comportamento padrão do link
});


})(jQuery);

