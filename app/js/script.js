const btn_hamburger = document.getElementById('btn_hamburger');
const header = document.getElementById('header');
const overlay = document.querySelector('.overlay');
const nav_menu = document.getElementById('nav_menu');
const body = document.querySelector('body')

btn_hamburger.addEventListener('click', ()=>{
    
    nav_menu.classList.toggle('show')

    if (header.classList.contains('open')) { //close

        body.classList.remove('noscroll')
        header.classList.remove('open')      
        overlay.classList.remove('fade-in') 
        overlay.classList.add('fade-out') 

    } else{                      

        body.classList.add('noscroll')            // open
        header.classList.add('open')    
        overlay.classList.add('fade-in')     
        overlay.classList.remove('fade-out')   

    }
})