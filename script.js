function activateLink(event) {
    // Remove active class from all links
    const links = document.querySelectorAll('.active');
    links.forEach(link => link.classList.remove('active'));
  
    // Add active class to the clicked link
    event.target.classList.add('active');
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

document.addEventListener("DOMContentLoaded", function (event) {
  let circles = document.querySelectorAll('.circle'); // removed space in class selector
  circles.forEach(function (progress) {
    let degree = 0;
    let targetDegree = parseInt(progress.getAttribute('data-degree'));
    let color = progress.getAttribute('data-color');
    let number = progress.querySelector('.number'); // added '.' to select class properly

    let interval = setInterval(function () {
      degree += 1;
      if (degree > targetDegree) { // changed from degree > degree
        clearInterval(interval);
        return;
      }
      progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`; // fixed template string
      if (number) number.textContent = `${degree}%`;
    }, 20); // added interval timing to avoid infinite fast loop
  });
});

