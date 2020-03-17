// Select
$('.slct').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});

jQuery('.arrow_href').click(function(){
    jQuery(this).toggleClass('href_active');
});
jQuery('.arrow_href_one').click(function(){
    jQuery('.arrow_one').toggleClass('href_active_one');
});
// Select_two
$('.slct_two').click(function(){
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop_two');
    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();
        /* Выделяем ссылку открывающую select */
        $(this).addClass('active');
        /* Работаем с событием клика по элементам выпадающего списка */
        $('.drop_two').find('li').click(function(){
            /* Заносим в переменную HTML код элемента
            списка по которому кликнули */
            var selectResult = $(this).html();
            /* Находим наш скрытый инпут и передаем в него
            значение из переменной selectResult */
            $(this).parent().parent().find('input').val(selectResult);
            /* Передаем значение переменной selectResult в ссылку которая
            открывает наш выпадающий список и удаляем активность */
            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
            /* Скрываем выпадающий блок */
            dropBlock.slideUp();
        });
        /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }
    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
});
// Select_three
$('.slct_three').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop_three');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop_three').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});
// Select_four
$('.slct_four').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop_four');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop_four').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});
// Select_five
$('.slct_five').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop_five');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop_five').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});
// Select_six
$('.slct_six').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop_six');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop_six').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});


// SWITCH
jQuery('.switch_off').click(function(){
    jQuery(this).toggleClass('switch_on');
});
function myFunction() {
  var element = document.getElementById("inSize");
  element.classList.toggle("in_size");
}
function change_text() {
  var element = document.getElementById("changeText");
  element.classList.toggle("change_text");
}
function myFunctionTwo() {
  var element = document.getElementById("inSize_mob");
  element.classList.toggle("in_size");
}
function change_textTwo() {
  var element = document.getElementById("changeText_mob");
  element.classList.toggle("change_text");
}
// OWL-CAROUSEL
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
         1000:{
            items:4,
        },
        1400:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_2",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
        },
        1400:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
$('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_3",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4
        },
        1400:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
$('.owl-carousel-4').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_4",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        500:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
$('.owl-carousel-5').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_5",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        500:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
$('.owl-carousel-6').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_6",
    navText: ["<img src='img/icons/arrow_l.png'>", "<img src='img/icons/arrow_r.png'>"],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        500:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
$('.owl-carousel-7').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    navContainer: ".navigation_7",
    navText: ["", ""],
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:false
        }
    }
})



function change_visibility (block_close, block_open) {
    document.getElementById(block_close).style.display='block';
    document.getElementById(block_open).style.display='none';
    }

    $(function () {
  $(document).click((e) => {
    const {target} = e;
    if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});