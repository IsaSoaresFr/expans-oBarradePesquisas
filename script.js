const pesquisa = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    pesquisa.classList.toggle('active')
    input.focus()
})