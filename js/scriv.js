// toogle class active

const containerNav = document.querySelector
('.container-nav');
// ketika hamburger di klik
document.querySelector('#menu').
onclick = () =>  {
    containerNav.classList.toggle('active');
};

// klik dimana saja menghilangkan nav

const menu = document.querySelector
('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !containerNav.contains(e.target)) {
        containerNav.classList.remove('active');
    }
});