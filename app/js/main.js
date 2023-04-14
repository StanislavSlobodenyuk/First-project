
"use strict"

// == Бургер меню =========================================
const iconMenu = document.querySelector(".header-burger__icon");
const iconMenuClose = document.querySelector(".header-burger__icon-close");
const headerMenu = document.querySelector('.header__mobile');
const header = document.querySelector(".header__container")
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        iconMenuClose.classList.toggle('_active');
    });
};
if (iconMenuClose) {
    iconMenuClose.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        iconMenuClose.classList.toggle('_active');
    });
}
// == Бургер меню ==========================================

// == Slider on main page ==========================================
let promotionsSlider = new Swiper('.promotions-offers__slider',{
     
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
   
    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: false,
    // перемикання при кліку на слайд
    slideToClickedSlide: false,
  

    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },
    // кількість слайдів для показу читатти там відключення функціоналу якщо слайдів менше чим порібно 
    slidesPerView: 1,
    watchOverflow: true,

    // кількісь слайдів для листання
    slidesPerGroup: 1,

    // відступи між слайдами
    spaceBetween: 50,

    // нескінчений слайдер ТА якщо loop = true то loopedSlides == slidesPerView 
    loop: true,
    loopedSlides: 0,

    autoplay: {
        // затримка перед прокруткою
        delay: 3000,
        // зупинка на останьому слайді
        stopOnLastSlide: false,
        // відключити пілся ручної взаємодії
        disableOnInteraction: false,
    },

    // швидкість перемикання слайдів
    speed: 1000,

});
// == Slider on main page 


// == Slider on our-revards page 
let imageSlider = new Swiper('.our-rewards__slider',{
    // Кнопки навігації (стрілки)
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },

    // увімкнути/вимкнути захват та рух слайдів мишею на ПК
    simulateTouch: true,
    // чутливість
    touchRatio: 1,
    // кут роботи властивості
    touchAngle: 45,
    // курсор при переміщені
    grabCursor: false,
    // перемикання при кліку на слайд
    slideToClickedSlide: true,
  

    // управління клавіатурою 
    keyboard: {
        // ввімкнути/вимкнути 
        enabled: true,
        // ввімкнути тільки тоді коли слайдер видно
        onlyInViewport: true,
        // ввімкнути керування за допомогою page up/down
        pageUpDown: true,
    },

    slidesPerView: 3,
    watchOverflow: true,
    slidesPerGroup: 1,
    speed: 1000,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});


let recentlySlider = new Swiper('.recently-view__slider',{
    // Кнопки навігації (стрілки)
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: false,
    slideToClickedSlide: true, 

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    slidesPerView: 4,
    watchOverflow: true,
    slidesPerGroup: 1,
    speed: 1000,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        695: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1190: {
            slidesPerView: 4,
        },
    }
});