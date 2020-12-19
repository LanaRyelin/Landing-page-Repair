// Инициализация билиотеки WOW.js
new WOW().init();

$(document).ready(function() {

    // Валидация формы
    function validateForm(form) {
        $(form).validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
            },
            messages: {
                username: {
                    required: "<p>Укажите ваше имя.</p>",
                    minlength: jQuery.validator.format("<p>Имя не может быть короче {0} букв.</p>")
                },
                phone: "<p>Укажите ваш телефон.</p>"
            }
        });
    };
    validateForm('#offer-form');
    validateForm('#brif-form');

    // Маска для телефона
    $('.phone').mask('+7 (999) 999-99-99');

    // Модальное окно
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    // Слайдер
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
