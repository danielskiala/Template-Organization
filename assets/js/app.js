const nav = document.querySelector('.nav');
const btnUp = document.querySelector('.btn-top');

const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.nav-overlay');
const cancel  = document.querySelector('.cancel');
const loader  = document.querySelector('.loader');

const links = document.querySelectorAll('.nav-links a');
const activePage = window.location.pathname;

window.addEventListener('load', function(){
    loader.classList.add('hidden');
});

const onScroll = function(e){
    const scroll = window.scrollY;
    if(scroll > 150){
        nav.classList.add('background');
    }else{
        nav.classList.remove('background');
    }
    
    if(scroll > 800){
        btnUp.classList.add('show');
    }else{
        btnUp.classList.remove('show');
    }
}

for(var i = 0; i < links.length; i++){
    if(links[i].href.includes(activePage)){
        links[i].classList.add('active');
    }
}

toggle.addEventListener('click', function(){
    navLinks.classList.add('active');
})

cancel.addEventListener('click', function(){
    navLinks.classList.remove('active');
})

overlay.addEventListener('click', function(){
    navLinks.classList.remove('active');
})



btnUp.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
});
window.addEventListener('scroll', onScroll);
