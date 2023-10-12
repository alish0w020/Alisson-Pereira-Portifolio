
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')

btnMenu.addEventListener('click',()=>
    menu.classList.add('abrir-menu')
)

menu.addEventListener('click',()=>
    menu.classList.remove('abrir-menu')
)

overlay.addEventListener('click',()=>
    menu.classList.remove('abrir-menu')
)


let botao = document.getElementById('botao-subir')

window.addEventListener("scroll", function(event){
    if (window.scrollY == 0){
        botao.classList.remove("visible");        
    }
    else{
        botao.classList.add("visible")
    }
})







