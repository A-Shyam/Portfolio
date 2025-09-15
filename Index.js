let menu=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fx-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.toggle('fx-xmark');
    navbar.classList.toggle('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['<i>a Full Stack Developer.</i>', ' <i>exploring DevOps.</i>'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1200,
      loop: true,
    });