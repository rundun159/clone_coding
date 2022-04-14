'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;
const contact_btn = document.querySelector('#home__contact');


document.addEventListener('scroll', ()=>{
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
  };
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