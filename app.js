const navBar = document.querySelector('.nav');
const navButton = document.querySelector('.nav-toggle');

navButton.addEventListener('click', toggleNavigation);

function toggleNavigation(){
    if(navBar.classList.contains('is-open')){
        this.setAttribute('aria-expanded', false);
        navBar.classList.remove('is-open');
    }else{
        navBar.classList.add('is-open');
        this.setAttribute('aria-expanded', true);
    }
}