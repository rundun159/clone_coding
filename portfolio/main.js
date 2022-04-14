'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;
const contact_btn = document.querySelector('#home__contact');
const home__container = document.querySelector('#home__container');
const aboutTop = document.querySelector('#about').getBoundingClientRect().top;

document.addEventListener('scroll', ()=>{
  let home_op = 1;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
    return;
  };
  home_op = 1.0 * (aboutTop-window.scrollY) / parseFloat(aboutTop);
  home__container.style.opacity = home_op;  
});

navbar.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(!link)
    return;
  customScrollIntoView(link);
})

contact_btn.addEventListener('click',(event) => {
  customScrollIntoView('#contact');
});


function customScrollIntoView(selector){
  document.querySelector(selector).scrollIntoView({behavior: "smooth"});
}
