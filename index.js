const sidebar = document.querySelector('div.main__sidebar')
const button = document.querySelector('i.menu__icone')
const corpo = document.querySelector('body')
function ativar() {
    sidebar.classList.toggle('main__sidebar--ativo')
    console.log('ativo')
}

function esconder() {
    sidebar.classList.remove('main__sidebar--ativo')
}