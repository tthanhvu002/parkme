window.onscroll = () => {
    if(window.scrollY > 10){
        document.querySelector('.header').classList.add('scroll')
    } else{
        document.querySelector('.header').classList.remove('scroll')
    
    }
}
