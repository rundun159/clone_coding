'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const contact_btn = document.querySelector('#home__contact');
const home__container = document.querySelector('#home__container');
const aboutTop = document.querySelector('#about').getBoundingClientRect().top;
const skillsTop = document.querySelector('#skills').getBoundingClientRect().top;
const workTop = document.querySelector('#work').getBoundingClientRect().top;
const testimonialsTop = document.querySelector('#testimonials').getBoundingClientRect().top;
const contactTop = document.querySelector('#contact').getBoundingClientRect().top;

const navbar__home_btn = document.querySelector('#navbar__home-btn');
const navbar__about_btn = document.querySelector('#navbar__about-btn');
const navbar__skills_btn = document.querySelector('#navbar__skills-btn');
const navbar__work_btn = document.querySelector('#navbar__work-btn');
const navbar__testimonials_btn = document.querySelector('#navbar__testimonials-btn');
const navbar__contact_btn = document.querySelector('#navbar__contact-btn');

const arrow_up_btn = document.getElementById('arrow_up_btn');

document.addEventListener('scroll', () => {
  let home_op = 1;
  if (window.scrollY < navbarHeight) {
    navbar.classList.remove('navbar--dark');
    arrow_up_btn.classList.remove('active');
    return;
  }
  else if (window.scrollY <= aboutTop) { // in home section
    navbar.classList.add('navbar--dark');
    home_op = 1.0 * (aboutTop - window.scrollY) / parseFloat(aboutTop);
    home__container.style.opacity = home_op;
    navbar__home_btn.classList.add('active');
    navbar__about_btn.classList.remove('active');
    arrow_up_btn.classList.add('active');
  }
  else if (window.scrollY < skillsTop) { // in about section
    navbar__home_btn.classList.remove('active');
    navbar__about_btn.classList.add('active');
    navbar__skills_btn.classList.remove('active');
    arrow_up_btn.classList.add('active');
  }
  else if (window.scrollY < workTop) {
    navbar__about_btn.classList.remove('active');
    navbar__skills_btn.classList.add('active');
    navbar__work_btn.classList.remove('active');
    arrow_up_btn.classList.add('active');
  }
  else if (window.scrollY < testimonialsTop) {
    navbar__skills_btn.classList.remove('active');
    navbar__work_btn.classList.add('active');
    navbar__testimonials_btn.classList.remove('active');
    arrow_up_btn.classList.add('active');
  }
  else {
    navbar__testimonials_btn.classList.remove('active');
    navbar__contact_btn.classList.add('active');
    arrow_up_btn.classList.add('active');
  }
});

arrow_up_btn.addEventListener('click', (event) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

navbar.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link)
    return;
  customScrollIntoView(link);
  console.log(target.id);
  // document.getElementById(target.id).add
})

contact_btn.addEventListener('click', (event) => {
  customScrollIntoView('#contact');
});


function customScrollIntoView(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}

// my work section 
// button event handling
// const class_arr_dict = new Map({
//   'FE': new Array(),
//   'BE': new Array(),
//   'Mobile': new Array(),
// });

const class_arr_dict = new Map([
  ['FE', new Array()],
  ['BE', new Array()],
  ['Mobile', new Array()]
]);


const projects = document.querySelector('.work__projects');
const project_list = projects.children;

for (let i = 0; i < project_list.length; i++) {
  const project = project_list[i];
  class_arr_dict.get(project.dataset.class).push(document.getElementById(project.id));
}

const work_categories = document.querySelector('.work__categories');
const work_btn_list = work_categories.children;

work_btn_list[0].addEventListener('click', (event) => {
  for(let work_btn_ of work_btn_list)
    work_btn_.classList.remove('active');
  work_btn_list[0].classList.add('active');

  projects.classList.add('anime-out');
  setTimeout(()=>{
    for(const [key, value] of class_arr_dict)   
      add_class_list(value, 'active');  
    projects.classList.remove('anime-out');
  }, 300);  

});

for (let i=1; i<work_btn_list.length; i++){
  const work_btn = work_btn_list[i];
  work_btn.addEventListener('click', (event)=>{
    for(let work_btn_ of work_btn_list)
      work_btn_.classList.remove('active');
    work_btn.classList.add('active');
    projects.classList.add('anime-out');
    setTimeout(()=>{
      for(const [key, value] of class_arr_dict){
        if (key==work_btn.dataset.class)
          add_class_list(value, 'active');
        else
          remove_class_list(value, 'active');      
      }
      projects.classList.remove('anime-out');
  }, 300);
  });
}

function remove_class_list(ele_list, class_name)
{
  for(let i=0; i < ele_list.length; i++)
    ele_list[i].classList.remove(class_name);
}

function add_class_list(ele_list, class_name)
{
  for(let i=0; i < ele_list.length; i++)
    ele_list[i].classList.add(class_name);
}

const navbar__toggle_btn = document.querySelector('.navbar__toggle-btn');
const navbar__menu__container = document.querySelector('.navbar__menu__container');
const navbar__menu__container__anime = document.querySelector('.navbar__menu__container__anime');
let is_toggle_selected = false;
navbar__toggle_btn.addEventListener('click', (event) => {
  if(is_toggle_selected)
  {
    navbar__menu__container__anime.classList.remove('visible');
    navbar__menu__container.classList.remove('active');
    is_toggle_selected = false;
  }
  else
  {
    navbar__menu__container__anime.classList.add('visible');
    navbar__menu__container.classList.add('active');
    navbar.classList.add('navbar--dark');
    is_toggle_selected = true;
  }
});

// const navbar__menu__item__list = document.querySelectorAll('.navbar__menu__item');
// for(let navbar__menu__item of navbar__menu__item__list)
// {
//   navbar__menu__item.addEventListener('click', (event)=>{
//     console.log("It is clicked");
//     navbar__menu__container__anime.classList.remove('visible');
//     navbar__menu__container.classList.remove('active');
//     is_toggle_selected = false;
//   });
// }