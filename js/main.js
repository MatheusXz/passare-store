let banco = ['casa', 'carro', 'moto', 'sdfgkjdahfkjsdhfgldhaflghasdfgkçjahsdfgkjadhfkgldhafglksjdfgkjdfhg']

buscar = (pchave, frases) => {
    let qtdDiditada = pchave.length
    let resultado1 = []
    let fim = []
    frases.forEach(element => {

        if (element.substring(0, qtdDiditada) == pchave.toLowerCase())
            resultado1.push(`<option value="${element}"></option>`)
    });


    return resultado1.join(' ')
}

let search = document.getElementById('search');
let sugestao = document.getElementById('sugestao');

search.addEventListener('input', function () {
    let pchave = search.value
    if (search.value != '')
        sugestao.innerHTML = buscar(pchave, banco)
    else
        sugestao.innerHTML = '';
})

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + '55px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
