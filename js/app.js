document.addEventListener('DOMContentLoaded', () => {

    eventListener();
});

//Variables
const menuBurger = document.querySelector('#burger');
const proyect = document.querySelector('.proyecto-info');
const barra = document.querySelector('#barra');
const copiar = document.querySelector('#copy');
const date = document.querySelector('#date');

///Functions

function eventListener() {
    menuBurger.addEventListener('click', showMenu);
    barra.addEventListener('click', showMenu);
    copiar.addEventListener('click', copyToClipboard);
}

function showMenu() {

    if(barra.classList.contains('mostrar')){
        barra.classList.remove('mostrar')
        menuBurger.classList.remove('activo');
    }else{
        barra.classList.toggle('mostrar');
        menuBurger.classList.toggle('activo');
    }

};

function copyToClipboard() {
    const copyText = document.querySelector('#copyText').innerHTML;

    navigator.clipboard.writeText(copyText)
        .then(() => {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,
                background: '#cecece'
              })
              
              Toast.fire({
                text: 'Copied to Clipboard',
              })
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}

    const actualDate = new Date;
    date.innerHTML = actualDate.getFullYear();


//JQUERY
$(function() {

    /*MENU FIJO*/
    const windowHeight = $(window).height();
    const windowWidth = $(window.innerWidth)
    const barraAltura = $('.navigation').innerHeight();

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

            if(scroll > windowHeight) {
                $('.navigation').addClass('fixed');
                $('body').css({'margin-top': barraAltura +'px'});
            }else{
                $('.navigation').removeClass('fixed');
                $('body').css({'margin-top':'0px'});

            }
    }) 


    //*ColorBox */

    if(windowWidth[0] < 1200) {

        $('.proyecto-info').colorbox({
            inline:true, 
            width:'98%',
        })
    }else{
        $('.proyecto-info').colorbox({
            inline:true, 
            width:'60%',
        })

    }
    

    
});
