const divcontainer = document.getElementById('container');
const btn = document.getElementById('button')

divcontainer.addEventListener('click',() => {
    alert('Hola! Soy el div.');
})
btn.addEventListener('click',() =>{
    event.stopPropagation();
})