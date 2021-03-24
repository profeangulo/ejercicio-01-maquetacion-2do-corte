// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){
    
    // Activación de Slick Slider
    $('.slick-slider').slick({
        autoplay: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true
    });

});