//Calling an API method from MIXITUP
const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl);
mixer.filter('*');

//Scroll Section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      //active nav bar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    }
  });

  //Sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
}

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}

