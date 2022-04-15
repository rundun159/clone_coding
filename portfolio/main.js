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
const class_arr_dict = {
  'FE': new Array(),
  'BE': new Array(),
  'Mobile': new Array(),
};
const projects = document.querySelector('.work__projects');
const project_list = projects.children;

for (let i = 0; i < project_list.length; i++) {
  const project = project_list[i];

  // console.log(project);
  console.log(project.dataset.class);

}