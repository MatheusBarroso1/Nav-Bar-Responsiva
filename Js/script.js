function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        icon.src = "Imagens/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        icon.src = "Imagens/close_white_36dp.svg";
    }
}
