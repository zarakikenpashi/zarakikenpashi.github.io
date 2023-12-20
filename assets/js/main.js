const showMenu = () =>{
    document.querySelector('.nav__toggle').classList.toggle('active')
}

document.querySelector('.nav__links__sub').addEventListener('click',function(e){
    e.preventDefault()
    e.currentTarget.classList.toggle('active')
},false)
