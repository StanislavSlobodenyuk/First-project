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
        header.classList.toggle('_visible');
        iconMenuClose.classList.toggle('_active');
    });
};
if (iconMenuClose) {
    iconMenuClose.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        header.classList.toggle('_visible');
        iconMenuClose.classList.toggle('_active');
    });
}
// == Бургер меню ==========================================
