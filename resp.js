burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navlist');
rightNav = document.querySelector('.right-nav');

burger.addEventListener('click', () =>{
    rightNav.classList.toggle('nav-collapse');
    navList.classList.toggle('nav-collapse');
    navbar.classList.toggle('h-nav');
})