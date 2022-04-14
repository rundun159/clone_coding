'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight= navbar.getBoundingClientRect().height;
const home = document.querySelector('#home');
const homeTop = home.getBoundingClientRect().top;
const about = document.querySelector('#about');
const aboutTop = about.getBoundingClientRect().top;
const skills = document.querySelector('#skills');
const skillsTop = skills.getBoundingClientRect().top;
const work = document.querySelector('#work');
const workTop = work.getBoundingClientRect().top;
const testimonials = document.querySelector('#testimonials');
const testimonialsTop = testimonials.getBoundingClientRect().top;
const contact = document.querySelector('#contact');
const contactTop = contact.getBoundingClientRect().top;

document.addEventListener('scroll', ()=>{
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
  };
});

function moveHome(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function moveAbout(){
  window.scrollTo({
    top: aboutTop,
    left: 0,
    behavior: 'smooth'
  });
}

function moveSkills(){
  window.scrollTo({
    top: skillsTop,
    left: 0,
    behavior: 'smooth'
  });
}

function moveMyWork(){
  window.scrollTo({
    top: workTop,
    left: 0,
    behavior: 'smooth'
  });
}

function moveTestimonial(){
  window.scrollTo({
    top: testimonialsTop,
    left: 0,
    behavior: 'smooth'
  });
}

function moveContact(){
  window.scrollTo({
    top: contactTop,
    left: 0,
    behavior: 'smooth'
  });
}

