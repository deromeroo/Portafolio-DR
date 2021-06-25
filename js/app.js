document.addEventListener('DOMContentLoaded', () => {

    eventListener();
});

//Variables
const menuBurger = document.querySelector('#burger');
const proyecto = document.querySelector('.proyecto-info');
const barra = document.querySelector('#barra');

///Funciones

function eventListener() {
    menuBurger.addEventListener('click', mostrarMenu);
    barra.addEventListener('click', mostrarMenu)
}

function mostrarMenu() {

    if(barra.classList.contains('mostrar')){
        barra.classList.remove('mostrar')
        menuBurger.classList.remove('activo');
    }else{
        barra.classList.toggle('mostrar');
        menuBurger.classList.toggle('activo');
    }

};




//JQUERY
$(function() {

    /*MENU FIJO*/
    const windowHeight = $(window).height();
    const barraAltura = $('.navegacion').innerHeight();

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

            if(scroll > windowHeight) {
                $('.navegacion').addClass('fixed');
                $('body').css({'margin-top': barraAltura +'px'});
            }else{
                $('.navegacion').removeClass('fixed');
                $('body').css({'margin-top':'0px'});

            }
    }) 


    //*ColorBox */

    $('.proyecto-info').colorbox({
        inline:true, 
        width:'75%',
    })
    
});
