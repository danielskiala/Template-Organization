const links = document.querySelectorAll('.nav-links a');
const activePage = window.location.pathname;

for(var i = 0; i < links.length; i++){
    if(links[i].href.includes(activePage)){
        links[i].classList.add('active');
    }
}