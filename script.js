/* ========================= */
/*        script.js          */
/* ========================= */

// LOADER

window.addEventListener('load', () => {

  document.getElementById('loader')
    .style.display = 'none';

});

// MOBILE MENU

const menuBtn =
  document.getElementById('menu-btn');

const navLinks =
  document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});

// AUTO CLOSE MOBILE MENU

document.querySelectorAll('.nav-links a')
  .forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('active');

    });

  });

// LIVE CLOCK

function updateClock() {

  const clock =
    document.getElementById('clock');

  const now = new Date();

  clock.innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

// TYPING EFFECT

const text = [

  "Front-End Developer",
  "Web Designer",
  "UI/UX Designer"

];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

  if (count === text.length) {

    count = 0;

  }

  currentText = text[count];

  letter =
    currentText.slice(0, ++index);

  document.querySelector('.typing')
    .textContent = letter;

  if (letter.length === currentText.length) {

    count++;
    index = 0;

    setTimeout(type, 1000);

  }

  else {

    setTimeout(type, 120);

  }

})();

// SCROLL REVEAL

const reveals =
  document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach(reveal => {

    let windowHeight =
      window.innerHeight;

    let revealTop =
      reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      reveal.classList.add('active');

    }

  });

});

// DARK MODE

const darkBtn =
  document.getElementById('dark-btn');

let darkMode = true;

darkBtn.addEventListener('click', () => {

  if (darkMode) {

    document.body.style.background =
      '#f8fafc';

    document.body.style.color =
      '#020617';

    darkBtn.innerHTML = '☀️';

    darkMode = false;

  }

  else {

    document.body.style.background =
      '#020617';

    document.body.style.color =
      'white';

    darkBtn.innerHTML = '🌙';

    darkMode = true;

  }

});

// EMAILJS CONTACT FORM

const contactForm =
  document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {

  e.preventDefault();

  emailjs.sendForm(

    'service_n636t9m',
    'template_y65mifx',
    this

  )

    .then(() => {

      alert('Message sent successfully!');

      contactForm.reset();

    })

    .catch((error) => {

      alert('Failed to send message.');

      console.log(error);

    });

});  