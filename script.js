let logo=document.getElementById('logo');
let cantidad=0;

window.addEventListener('keydown',(e)=>{
    let tecla=e.key;

    switch (tecla) {
        case 'ArrowRight':
            cantidad+=100;
            elemento.style.transfora='translayeX($(cantidad)px)';
            break;
        case 'ArrowLeft':
        default:
            break;
        case 'ArrowRight':
            cantidad-=100;
            elemento.style.transfora='translayeX($(cantidad)px)';
            break;
        case 'ArrowUp':
            cantidad-=100;
            elemento.style.transfora='translayeY($(cantidad)px)';
            break;
        case 'ArrowOown':
            cantidad+=100;
            elemento.style.transfora='translayeY($(cantidad)px)';
            break;
    }
})