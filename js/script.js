$(document).ready(function() {

    //Анимация карточек
    function viewport(item) {
        $(item).viewportChecker({
            callbackFunction:function(){
                $(item).toggleClass('fadeInUp');
            }
        });
    };
    for(i=1; i<=6; i++) {
        viewport('#cards__item-'+i);
    };

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
    // var button = $('#button');
    // var modal = $('#modal');
    // var close = $('#close');

    // Модальное окно по цене
    // var buttonPrice = $('.card__link');
    // var modalPrice = $('#modal-price');
    // var closePrice = $('#close-price');
    
    // function modalActive(button, modal, close) {
    //     button.on('click', function() {
    //         modal.addClass('modal_active');
    //     });
    
    //     close.on('click', function() {
    //         modal.removeClass('modal_active');
    //     });
    // };
    // modalActive(button, modal, close);
    // modalActive(buttonPrice, modalPrice, closePrice);

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

    // Кнопка наверх
    $('#scroll_up').click(function() {
        if($(document).scrollTop() > 0) {
            $('html, body').animate({scrollTop:0}, 800);
        }
    });

    $(document).scroll(function() {
        if($(document).scrollTop() > 1000) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });

});
